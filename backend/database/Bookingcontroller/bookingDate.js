const Booking = require("../models/Booking.js")

const create = async(req, res)=>{
    try {
        const reqBody = req?.body??"";
        if(reqBody===""){
            return res.status(404).json({msg: "Invalid Input"});
        }
        console.log(req.body)
        const bkData = new Booking(req.body);
        console.log(bkData)

        if(!bkData){
            return res.status(404).json({msg: "Booking details not found"});
        }

        await bkData.save();
        res.status(200).json({msg: "Booking created successfully"});

    } catch (error) {
        res.status(500).json({error});
    }
}
module.exports =create;