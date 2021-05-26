const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    details: Array
})

module.exports = mongoose.model('product', productSchema);