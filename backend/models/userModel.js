import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

userSchema.statics.signup = async (email, password) => {
	const exists = await User.findOne({ email });
	if (exists) {
		throw Error("Email already in use");
	}

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user = await User.create({ email, password: hash });

	return user;
};

export const User = mongoose.model("User", userSchema);
