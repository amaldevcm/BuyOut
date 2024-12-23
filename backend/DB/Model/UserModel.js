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
    role: {
        type: String,
        default: 'user',
        required: false
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
        required: false
    },
    createdDate: String,
    updatedDate: String
});

module.exports = new mongoose.model('User', userSchema);


