const User = require("../models/User.js")

const create = async(req, res)=>{
    try {

        const userData = new User(req.body);

        if(!userData){
            return res.status(404).json({msg: "User data not found"});
        }

        await userData.save();
        return res.status(200).json({msg: "User created successfully"});

    } catch (error) {
        return res.status(500).json({error: error});
    }
}
module.exports =create;