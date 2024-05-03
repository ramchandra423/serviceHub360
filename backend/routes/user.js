const express = require("express");
const User = require("../database/models/User");
const Admin = require("../database/models/Admin");
const Employee = require("../database/models/Employee");
const { generateToken } = require("../jwt");

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        console.log("user")
        const { userName, email, password } = req.body;
        
        const dbResponse = await User.create(req.body)

        return res.status(201).json({
            message: "User created succesfully",
            dbResponse
        })
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
})


// router.post("/login", async (req, res) => {
//     try {
//         console.log("user")
//         const { email, password } = req.body;
//         const dbResponse = await User.findOne({ email })
//         const dbResponseadmin = await Admin.findOne({ email })
//         const dbResponseemp = await Employee.findOne({email})
//         if (!dbResponse) {

//             if (!dbResponseadmin) {
//                 if (!dbResponseemp) {
//                     return res.status(500).json({
//                         message: "Invalid Credentials"
//                     })
//                 }
//                 if (dbResponseemp.password === password)
//                     return res.status(201).json({
//                         message: "Employee loggedin succesfully",
//                     })
//                 else
//                     return res.status(500).json({
//                         message: "Invalid Credentials"
//                     })
//             }
//             if (dbResponseadmin.password === password)
//                 return res.status(201).json({
//                     message: "admin loggedin succesfully",
//                 })
//             else
//                 return res.status(500).json({
//                     message: "Invalid Credentials"
//                 })
//             // return res.status(500).json({
//             //     message: "Invalid Credentials"
//             // })
//         }
//         if (dbResponse.password === password)
//             return res.status(201).json({
//                 message: "User loggedin succesfully",
//             })
//         else
//             return res.status(500).json({
//                 message: "Invalid Credentials"
//             })

//     }
//     catch (err) {
//         return res.status(500).json({
//             message: "Something went wrong"
//         })
//     }
// })

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const empEmail=email;
        const dbResponse = await User.findOne({ email });
        const dbResponseadmin = await Admin.findOne({ email });
        const dbResponseemp = await Employee.findOne({ empEmail });
        console.log(dbResponseemp)
        if (!dbResponse && !dbResponseadmin && !dbResponseemp) {
            return res.status(500).json({ success:false,message: "Invalid Credentials0" });
        }

        let user, role;
        if (dbResponse) {
            user = dbResponse;
            role = 'user';
        } else if (dbResponseadmin) {
            user = dbResponseadmin;
            role = 'admin';
        } else {
            user = dbResponseemp;
            role = 'employee';
        }

        if (user.password === password || user.empPassword === password) {
            // Generate JWT token with user information and role
            const token = generateToken({ userId: user._id, email: user?.email??user.empEmail, role });

            // Send token in response
            return res.status(201).json({ success:true,message: "User logged in successfully", token,role });
        } else {
            console.log(user)
            return res.status(500).json({ success:false,message: "Invalid Credentials1" });
        }
    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ success:false,message: "Something went wrong" });
    }
});


module.exports = router;