const Service = require("../models/Service.js")
const getOne = async(req, res) =>{
    try {
        const id = req.params.id;
        const serExist = await Service.findById(id);
        if(!serExist){
            return res.status(404).json({msg: "Service not found"});
        }
        res.status(200).json(serExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}
module.exports=getOne;