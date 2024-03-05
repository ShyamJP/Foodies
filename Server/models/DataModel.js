const mongoose = require('mongoose');

const DataSchma = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url:{
        type: String,
    },
    price:{
        type: Number,
        required: true
    },
    desc:{
        type: String,
    },
    rating:{
        type: Number
    },
    category:{
        type: String,
        required: true
    },
    timing:{
        type: String,
        required: true
    }
})

const dataModel = mongoose.model('Data',DataSchma);
module.exports = dataModel;