
const User = require("../models/User.js")

const update = async(req, res) =>{
    try {
        

        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg:"User not found"});
        }

        const updatedData = await User.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "User updated successfully"});
        
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

module.exports=update;
