const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: null,
        required: true
    },
    email: {
        type: String,
        default: null,
        required: true
    },
    password: {
        type: String,
        default: null,
        required: true
    },
    phone: Number,
    zipCode: Number,
    address: {
        type: String,
        default: null,
        required: false
    },
    pincode: {
        type: Number,
        default: null,
        required: true
    },
});

module.exports = new mongoose.model('User', userSchema);


