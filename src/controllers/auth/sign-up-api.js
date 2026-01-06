import UserModel from "../../models/auth/sign-up.js";
import bcrypt from "bcrypt";
import {v4 as uuid} from "uuid";

const Signup = async (req, res) => {
  try {
    const { fname, lname, username, profession, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = uuid();

    if (!fname || !lname || !username || !profession || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required for sign up" });
    }

    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this username already exists" });
    }

    const existingEmail = await UserModel.findOne({ email });
    if (existingEmail) {
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }

    const userData = new UserModel({
      _id: userId,
      fname,
      lname,
      username,
      profession,
      email,
      password: hashedPassword,
    });
    await userData.save();
    return res.json({ message: "Thankyou for using the API" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Something went wrong", error });
  }
};

export default Signup;
