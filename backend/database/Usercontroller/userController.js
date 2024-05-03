const User = require("../models/User.js")

const getAll = async(req, res) =>{
    try {

        const userData = await User.find();
        
        if(!userData){
            return res.status(404).json({msg:"User data not found"});
        }
        res.status(200).json(userData);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}












module.exports = getAll;
