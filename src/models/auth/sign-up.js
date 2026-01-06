import { Schema } from "mongoose";
import { model } from "mongoose";

const userSchema = new Schema({
    _id : String,
    fname: String,
    lname: String,
    username: String,
    profession: String,
    email: String,
    password: String,
});

export const UserModel = model("users", userSchema);


export default UserModel;

