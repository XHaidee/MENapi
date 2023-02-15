import mongoose from "mongoose";

//defineing Schema
const studentSchema=new mongoose.Schema({
    name:{
        type:String,requried:true,trim:true
    },
    age:{
        type:Number,required:true
    },
    fees:{
        type:mongoose.Decimal128,required:true,validate:(value)=>value>=5000.5
    }
})

const StudentModel=mongoose.model("student",studentSchema)
export default StudentModel