import UserModel from "../../models/auth/sign-up.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const newUser = await UserModel.findOne({ email });
    // console.log(newUser);
    if (!newUser) {
      return res.status(404).json({ message: "User not found" });
    }
    // console.log("New User validation passed");
    // console.log(password, newUser.password);
    const isPasswordValid = await bcrypt.compare(password, newUser.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
    }
    // console.log("Password validation passed");
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(201).json({ message: "Detail fetched successfully", token });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Something went wrong", error });
  }
};

export default Signin;
