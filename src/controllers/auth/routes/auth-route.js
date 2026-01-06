import { Router } from "express";
import Signup from "../sign-up-api.js";
import Signin from "../sign-in-api.js";

const authRoutes = Router();

authRoutes.post("/sign-up", Signup);
authRoutes.post("/sign-in", Signin);

export default authRoutes;