// const Employee = require("../models/Employee.js")
const Service =require("../models/Service")

const deleteService = async(req, res) =>{
    try {

        const id = req.params.id;
        const serExist = await Service.findById(id);
        if(!serExist){
            return res.status(404).json({msg: "Service not exist"});
        }
        await Service.findByIdAndDelete(id);
        res.status(200).json({msg: "Service deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}
module.exports=deleteService;