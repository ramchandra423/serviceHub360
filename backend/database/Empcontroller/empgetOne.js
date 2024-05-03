const Employee = require("../models/Employee.js")
const getOne = async(req, res) =>{
    try {
        const id = req.params.id;
        const empExist = await Employee.findById(id);
        if(!empExist){
            return res.status(404).json({msg: "emp not found"});
        }
        res.status(200).json(empExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}
module.exports=getOne;