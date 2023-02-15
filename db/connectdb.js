import mongoose from "mongoose";

const connectDB=async ()=>{
    try{
        mongoose.set('strictQuery', true);
        var db = "mongodb://127.0.0.1:27017/school";
        const conn = await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
         
          })
    
    console.log(`MongoDB Connected:${conn.connection.host}`);
    }catch(error){
        console.error(`Error:${error.message}`);
        process.exit(1);
}}
export default connectDB