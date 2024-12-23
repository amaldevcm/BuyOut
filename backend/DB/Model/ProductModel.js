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
    sellerId: {
        type: String,
        default: null,
        required: true
    },
    buyerId: {
        type: String,
        default: null,
        required: false
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true,
        required: true
    },

});

module.exports = new mongoose.model('Products', productSchema);