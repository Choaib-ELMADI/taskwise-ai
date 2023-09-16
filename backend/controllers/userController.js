import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
	return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "4d" });
};

export const loginUser = async (request, response) => {
	return response.status(200).json({ message: "Login user" });
};

export const signupUser = async (request, response) => {
	try {
		const { email, password } = request.body;

		const user = await User.signup(email, password);
		const token = createToken(user._id);

		return response
			.status(200)
			.json({ message: "User created successfully", token });
	} catch (err) {
		console.log(err.message);
		return response
			.status(500)
			.send({ message: err.message || "Something went wrong" });
	}
};
