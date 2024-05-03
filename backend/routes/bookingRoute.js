const express = require("express");

const create =require("../database/Bookingcontroller/bookingDate.js");
const getUser =require("../database/Bookingcontroller/bookingGETuser.js");
const getEmp =require("../database/Bookingcontroller/bookingGETemp.js")
// const getEmployee =require("../database/Bookingcontroller/bookingGETemployee.js");


const Booking = require("../database/models/Booking.js")

// const deleteEmp =require("../database/Empcontroller/empDelete.js");
// const  getAll =require("../database/Servicecontroller/allService.js");
// const deleteService = require("../database/Servicecontroller/deleteService.js");
// const getOne =require("../database/Servicecontroller/sergetOne.js");
// const update =require("../database/Servicecontroller/updateService.js");


const bookingroute = express.Router();


// serviceroute.get("/getall", getAll);
bookingroute.post("/create", create);
bookingroute.get("/get/user", getUser);
bookingroute.get("/get/employee", getEmp);
bookingroute.post("/updateStatus", async(req,res)=>{
    const {status,_id}  = req?.body;
    if (!status ||!_id){
        return res.status(400).json({msg:"Invalid input"});
    }
    else{
        const updatedBooking = await Booking.findByIdAndUpdate(_id, { isBookingApproved:status   }, { new: true });
        return  res.status(201).json({data:updatedBooking})
    }
});

// bookingroute.get("/get/employee", getEmployee);

// serviceroute.get("/getone/:id", getOne);
// serviceroute.put("/update/:id", update);
// serviceroute.delete("/delete/:id", deleteService);

module.exports =bookingroute;

