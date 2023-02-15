import  express from "express";
import mongoose from "mongoose";
import connectDB from "./db/connectdb.js";
import router from "./routes/web.js";
const app=express();
const port=process.env.PORT||"3000";
app.use(express.json())
app.use("/student/api/",router)
connectDB();
app.listen(port,()=>{
    console.log(`server listening to the port ${port}`)
})

