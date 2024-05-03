const Service = require("../models/Service.js")

const create = async(req, res)=>{
    try {

        const serData = new Service(req.body);

        console.log(serData)
        

        if(!serData){
            return res.status(404).json({msg: "Service data not found"});
            
        }

        await serData.save();
        
        return res.status(200).json({msg: "Service created successfully"});

    } catch (error) {
        return res.status(500).json({error: error});
    }
}
module.exports =create;