const express = require("express");
const Service = require("../database/models/Service.js")

const create = require("../database/Servicecontroller/addService.js");
// const deleteEmp =require("../database/Empcontroller/empDelete.js");
const getAll = require("../database/Servicecontroller/allService.js");
const deleteService = require("../database/Servicecontroller/deleteService.js");
const getOne = require("../database/Servicecontroller/sergetOne.js");
const update = require("../database/Servicecontroller/updateService.js");
const getService = require("../database/Servicecontroller/serviceGETuser.js")


const serviceroute = express.Router();


serviceroute.get("/getall", getAll);
serviceroute.post("/create", create);
serviceroute.get("/getone/:id", getOne);
serviceroute.put("/update/:id", update);
serviceroute.delete("/delete/:id", deleteService);
serviceroute.get("/getctw", getService);
serviceroute.get("/getbyEmail", async (req, res) => {
    try {
        const {empEmail} = req?.query?? {empEmail:null};
        if(!empEmail){
            return res.status(400).json({mag:"Please enter email in query as empEmail"})
        }
        const data = await Service.find({ empEmail });
        if (!data) {
            return res.status(500).json({ message: "No services found" })
        }
        else {
            return res.status(200).json({ data })
        }
    }
    catch (error) {
        return res.status(500).json({ messgae: "Something went wrong", error })
    }

})

module.exports = serviceroute;

