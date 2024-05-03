const Employee = require("../models/Employee.js")


const deleteEmp = async(req, res) =>{
    try {

        const id = req.params.id;
        const empExist = await Employee.findById(id);
        if(!empExist){
            return res.status(404).json({msg: "emp not exist"});
        }
        await Employee.findByIdAndDelete(id);
        res.status(200).json({msg: "Emp deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}
module.exports=deleteEmp;