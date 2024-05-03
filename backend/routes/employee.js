const express = require("express");
const Employee = require("../database/models/Employee");

const router = express.Router();

router.post("/signup", async (req, res) => {
    console.log("employee");
    try {
        console.log("employee")
        const { category, empName, empEmail, empPassword } = req.body;
        // console.log(req.body)

        const dbResponse = await Employee.create(req.body)
        return res.status(201).json({
            message: "Employee created succesfully",
            dbResponse
        })
    } catch (err) {
        return res.status(500).json({
            error:err,
            message: "Something went wrong"
        })
    }
})

// router.post("/login",asunc (req,))

module.exports = router;