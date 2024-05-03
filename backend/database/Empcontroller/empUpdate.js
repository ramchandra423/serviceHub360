
const Employee = require("../models/Employee.js")

const update = async(req, res) =>{
    try {
        

        const id = req.params.id;
        const empExist = await Employee.findById(id);
        if(!empExist){
            return res.status(401).json({msg:"emp not found"});
        }

        const updatedData = await Employee.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "emp updated successfully"});
        
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

module.exports=update;
