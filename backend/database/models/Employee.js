const mongoose = require('mongoose');

// Define the User schema
const employeeSchema = new mongoose.Schema({
    category: {
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
        unique: true
    },
    empPassword: {
        type: String,
        required: true
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

// Create the Employee model from the schema
const Employee = mongoose.model('Employee', employeeSchema);

// Export theEmployee model
module.exports = Employee;
