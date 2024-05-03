// const express = require("express");
// const Admin = require("../database/models/Admin");

// const router = express.Router();
// router.post("/login", async (req, res) => {
//     try {
//         console.log("admin")
//         const { email, password } = req.body;
//         const dbResponse = await User.findOne({ email })
//         if (!dbResponse) {
//             return res.status(500).json({
//                 message: "Invalid Credentials"
//             })
//         }
//         if (dbResponse.password === password)
//             return res.status(201).json({
//                 message: "User loggedin succesfully",
//             })
//         else
//             return res.status(500).json({
//                 message: "Invalid Credentials"
//             })
//     } catch (err) {
//         return res.status(500).json({
//             message: "Something went wrong"
//         })
//     }
// })

// module.exports = router;