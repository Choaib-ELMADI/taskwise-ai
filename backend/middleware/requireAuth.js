import jwt from "jsonwebtoken";

import { User } from "../models/userModel.js";

export const requireAuth = async (request, response, next) => {
	const { authorization } = request.headers;
	if (!authorization) {
		return response
			.status(401)
			.json({ message: "Authorization token required" });
	}

	const token = authorization.split(" ")[1];

	try {
		const { _id } = jwt.verify(token, process.env.SECRET);
		request.user = await User.findOne({ _id }).select("_id");
		next();
	} catch (err) {
		console.log(err);
		return response
			.status(401)
			.json({ message: "Access not allowed. Request not authorized" });
	}
};
