const mongoose = require('mongoose');

// Define the User schema
const serviceSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    serviceName:{
        type: String,
        required: true
    },
    empName: {
        type: String,
        required: true
    },
    empEmail: {
        type: String,
        required: true,
        // unique: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    price:{
        type:String,
        require: true
    },
    location:{
        type:String,
        require: true
    },
    description:{
        type:String,
        require: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Service model from the schema
const Service = mongoose.model('Service', serviceSchema);

// Export the Service model
module.exports = Service;
