const { json } = require('express');
const mongoose = require('mongoose');

// Define the User schema
const bookingSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true,
        
    },
    pin: {
        type: String,
        required: true
    },
    selectedTime: {
        type: String,
        required: true
    },
    service: {
        type: JSON,
        required: true
    },
    isBookingApproved:{
        type: String,
        required: true,
        default:"PENDING"   ///can be APPROVED or REJECTED
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
const Booking = mongoose.model('Booking', bookingSchema);

// Export theEmployee model
module.exports = Booking;
