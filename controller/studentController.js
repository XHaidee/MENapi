import StudentModel from "../models/Student.js";
class StudentController{
//CREATE A SINGLE DATA    
static createDoc =async (req, res)=>{
        try{
            const {name,age,fees}=req.body;
            const doc=new StudentModel({
                name:name,
                age:age,
                fees:fees
            });
            const result=await doc.save();
            res.status(201).send(result);
        }
        catch(error){
            console.log(error)
        }
    }
//FETCH ALL DATA 
    static getAllDoc=async(req,res)=>{
        try{
           const result=await StudentModel.find()
            res.send(result)
        }
        catch(error){
         console.log(error)   
        }
    }
//GET SINGLE DATA BY ID
    static getSigleDocById=async(req,res)=>{
        try{
            const result=await StudentModel.findById(req.params.id)
            res.send(result)}

        catch(error){
            console.log(error)
        }}
//UPDATE SINGLE DATA BY ID
    static updateSigleDocById=async(req,res)=>{
        try{
            const resutl=await StudentModel.findByIdAndUpdate(req.params.id, req.body)

            res.send(resutl)

        }
        catch(error){
            console.log(error);
        }    }
//DELETE SINGEL DATA BY ID
    static deleteSigleDocById=async(req,res)=>{
       try{
        const result=await StudentModel.findByIdAndDelete(req.params.id)
        res.status(204).send(result)
    
       }
       catch(error){
                console.log(error)
       }}

}
export default StudentController