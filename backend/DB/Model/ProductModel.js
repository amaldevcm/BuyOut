const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        default: null,
        required: true
    },
    description: {
        type: String,
        default: null,
        required: false
    },
    userId: {
        type: Number,
        default: null,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: true
    }

});

module.exports = new mongoose.model('Products', productSchema);