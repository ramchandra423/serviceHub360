const Employee = require("../models/Employee.js")

const getAll = async(req, res) =>{
    try {

        const empData = await Employee.find();
        
        if(!empData){
            return res.status(404).json({msg:"Emp data not found"});
        }
        res.status(200).json(empData);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}












module.exports = getAll;
