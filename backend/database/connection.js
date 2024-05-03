const mongoose = require('mongoose');

exports.dbConn = ()=>{
    const dbURL = "mongodb+srv://ramchandra:Rout123@cluster0.3hbas.mongodb.net/serviceProvider?retryWrites=true&w=majority"
    mongoose.connect(dbURL,{}).then((result)=>{
    console.log("Database Connected");
    }).catch((err)=>console.log(err));
} 