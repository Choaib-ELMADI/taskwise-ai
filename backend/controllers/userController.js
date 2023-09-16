import { User } from "../models/userModel.js";

export const loginUser = async (request, response) => {
	return response.status(200).json({ message: "Login user" });
};

export const signupUser = async (request, response) => {
	try {
		const { email, password } = request.body;

		const user = await User.signup(email, password);
		return response
			.status(200)
			.json({ message: "User created successfully", email, user });
	} catch (err) {
		console.log(err.message);
		return response
			.status(500)
			.send({ message: err.message || "Something went wrong" });
	}
};
