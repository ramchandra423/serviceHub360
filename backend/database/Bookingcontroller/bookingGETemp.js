const Booking = require("../models/Booking.js")

const getEmp = async(req, res)=>{
    try {
        // console.log(req.body)
        const {email} = req?.query;
        if(!email){
            return res.status(404).json({msg: "Invalid Input1111"});
        }
        // console.log(email)


        const serExist = await Booking.find({ "service.empEmail": email });
        if(!serExist){
            return res.status(404).json({msg: "Service requests not found100"});
        }
        res.status(200).json({data:serExist});
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error});
    }
}
module.exports =getEmp;