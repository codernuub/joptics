const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = Schema({
    name: {
        name: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const brandSchema = Schema({
    name: {
        name: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

exports.Collection = mongoose.model('collection', collectionSchema);
exports.Brand = mongoose.model('brand', brandSchema);