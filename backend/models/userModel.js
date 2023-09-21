import validator from "validator";
import mongoose from "mongoose";
// import bcrypt from "bcrypt";

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
	if (!email || !password) {
		throw Error("All fields must be filled");
	}

	if (!validator.isEmail(email)) {
		throw Error("Email is not valid");
	}

	if (!validator.isStrongPassword(password)) {
		throw Error("Password not strong enough");
	}

	const exists = await User.findOne({ email });
	if (exists) {
		throw Error("Email already in use");
	}

	// const salt = await bcrypt.genSalt(10);
	// const hash = await bcrypt.hash(password, salt);

	const user = await User.create({ email, password });
	return user;
};

userSchema.statics.login = async (email, password) => {
	if (!email || !password) {
		throw Error("All fields must be filled");
	}

	const user = await User.findOne({ email });
	if (!user) {
		throw Error("Incorrect email");
	}

	// const match = await bcrypt.compare(password, user.password);
	if (user.password !== password) {
		throw Error("Incorrect password");
	}

	return user;
};

export const User = mongoose.model("User", userSchema);
