import express from "express";
import dotenv from "dotenv";
import authRoutes from "./controllers/auth/routes/auth-route.js";
import dbConnection from "./config/db-config.js";
import cors from "cors";  
dotenv.config();


const app = express();
const port = 3000;

// DB Connection 
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/auth", authRoutes);


app.listen(port, () => {
  console.log("Server is listening on http://localhost:3000");
});
