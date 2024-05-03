const User = require("../models/User.js")


const deleteUser = async(req, res) =>{
    try {

        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg: "User not exist"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg: "User deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}
module.exports=deleteUser;