import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
console.log("MONGO_URI:", process.env.MONGO_URI);

export const connectDB=async(req,res)=>{
   try{
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Database connected")
   }catch(error){
console.log(`error in connecting database ${error}`)
   }
}