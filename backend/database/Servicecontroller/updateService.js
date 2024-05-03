
const Service = require("../models/Service")

const update = async(req, res) =>{
    try {
        

        const id = req.params.id;
        const serExist = await Service.findById(id);
        if(!serExist){
            return res.status(401).json({msg:"Service not found"});
        }

        const updatedData = await Service.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "Service updated successfully"});
        
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

module.exports=update;
