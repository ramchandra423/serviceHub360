const Employee = require("../models/Employee.js")

const create = async(req, res)=>{
    try {
        console.log(req.body)
        const empData = new Employee(req.body);
        // console.log(empData)

        if(!empData){
            return res.status(404).json({msg: "Emp data not found"});
        }

        await empData.save();
        res.status(200).json({msg: "Emp created successfully"});

    } catch (error) {
        res.status(500).json({error});
    }
}
module.exports =create;