const mongoose = require('mongoose');

// Define schema for Data
const dataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }
});

// Create model from schema
module.exports = mongoose.model('Data', dataSchema);
