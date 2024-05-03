const mongoose = require('mongoose');

// Define the User schema
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
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

// Create the User model from the schema
const Admin = mongoose.model('Admin', adminSchema);

// Export the User model
module.exports = Admin;
