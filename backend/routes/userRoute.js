const express = require("express");
const create =require("../database/Usercontroller/createUser.js");
const deleteUser =require("../database/Usercontroller/userDelete.js");
const  getAll =require("../database/Usercontroller/userController.js");
const getOne =require("../database/Usercontroller/usergetOne.js");
const update =require("../database/Usercontroller/userUpdate.js");
// const { create, deleteUser, getAll, getOne, update } =require("../database/controller/userController.js");

const route = express.Router();


route.get("/getall", getAll);
route.post("/create", create);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);

module.exports =route;

