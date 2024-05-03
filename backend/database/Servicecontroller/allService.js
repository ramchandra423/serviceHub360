const Service = require("../models/Service.js")

const getAll = async(req, res) =>{
    try {
        const {category} = req?.query??null;

        const {empEmail} =req?.query??null;

        if(empEmail){
            const serviceData = await Service.find({empEmail});
            console.log(serviceData)
            return res.status(200).json({message:"Service fetched by category",data:serviceData})
        }
        if(category){
            const serviceData = await Service.find({category});
            console.log(serviceData)
            return res.status(200).json({message:"Service fetched by category",data:serviceData})
        } 


        const serData = await Service.find();
        
        if(!serData){
            return res.status(404).json({msg:"Service data not found"});
        }
        res.status(200).json(serData);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}
module.exports = getAll;
