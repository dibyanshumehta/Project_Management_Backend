import { connect } from "mongoose";

 
 const dbConnection = async (req, res) =>{
 try {
    await connect(process.env.DB_URL);
    console.log("Database Connected Successfully!");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};

export default dbConnection;