import { User } from "../models/userModel.js";

export const loginUser = async (request, response) => {
	return response.status(200).json({ message: "Login user" });
};

export const signupUser = async (request, response) => {
	return response.status(200).json({ message: "Signup user" });
};
