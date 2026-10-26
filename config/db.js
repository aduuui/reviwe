import mongoose from "mongoose";
import "dotenv/config";
import dns from "node:dns";

// Set DNS servers
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected");
        
    } catch (error) {
        console.log("DB connection failed");
        console.log(error.message);
        process.exit(1)
    }
}
export default connectDB