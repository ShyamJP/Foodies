const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    "UserId":{
        type:String,
        required: true
    },
    "Products":{
        type: [],
        required:true,
        default:{}
    },
    "Total":{
        type:Number,
        required: true
    },
    "Date":{
        type:Date,
        default: new Date().toLocaleDateString()
    }
})

const OrderModel = mongoose.model('Orders',OrderSchema);
module.exports = OrderModel;