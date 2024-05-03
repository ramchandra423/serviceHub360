const express = require("express");

const create =require("../database/Empcontroller/empCreate.js");
const deleteEmp =require("../database/Empcontroller/empDelete.js");
const  getAll =require("../database/Empcontroller/empAll.js");
const getOne =require("../database/Empcontroller/empgetOne.js");
const update =require("../database/Empcontroller/empUpdate.js");


const emproute = express.Router();


emproute.get("/getall", getAll);
emproute.post("/create", create);
emproute.get("/getone/:id", getOne);
emproute.put("/update/:id", update);
emproute.delete("/delete/:id", deleteEmp);

module.exports =emproute;

