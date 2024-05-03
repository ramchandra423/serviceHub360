const Booking = require("../models/Booking.js")

const getUser = async(req, res)=>{
    try {
        // console.log(req.body.email)
        const email = req?.query?.email??"";
        if(email===""){
            return res.status(404).json({msg: "Invalid Input"});
        }
        console.log(email)


        const serExist = await Booking.find({ email});
        console.log(serExist)
        if(!serExist){
            return res.status(404).json({msg: "Service requests not found"});
        }
        res.status(200).json({data:serExist});
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error});
    }
}
module.exports =getUser;