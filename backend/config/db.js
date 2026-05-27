import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();

dns.setServers(["1.1.1.1", "8.8.8.8"]);
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("db connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDb;
