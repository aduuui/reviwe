import express from "express"
import connectDB from "./config/db.js";
import dotenv from "dotenv"
import productRouter from "./route/productRouter.js"


dotenv.config()

const app = express()

app.use(express.json())
app.use("/api",productRouter)

connectDB()

app.listen(4000,()=>{
    console.log("server is running on port 4000");
    
})