const express = require("express");
const sendEmail = require('../mail')
const router = express.Router();

router.post("/",async (req,res)=>{
    try{
        console.log("route visited")
        const {name,email,subject,message} = req.body;

        // const dbResponse = await ContactUs.create(req.body)
        await sendEmail(name, email, subject, message);

        return res.status(201).json({
            message:"Mail sent succesfully"
        })
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong"
        })
    }
})

// router.post("/login",asunc (req,))

module.exports = router;