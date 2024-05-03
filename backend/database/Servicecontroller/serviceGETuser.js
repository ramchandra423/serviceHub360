const Booking = require("../models/Service.js")

const getService = async(req, res)=>{
    try {
        const empEmail = req?.body.empEmail??"";
        if(empEmail===""){
            return res.status(404).json({msg: "Invalid Input"});
        }
        console.log(empEmail)


        const spsrExist = await Booking.find({ empEmail});
        console.log(serExist)
        if(!spsrExist){
            return res.status(404).json({msg: "Service requests not found"});
        }
        res.status(200).json({data:spsrExist});
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error});
    }
}
module.exports =getService;