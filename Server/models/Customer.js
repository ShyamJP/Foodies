const mongoose = require('mongoose')
const validator = require('validator')

const CustomerSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        validate: {
            validator: validator.isEmail
        },
        require: true
    },
    password:{
        type: String,
        require: true
    },
    Date:{
        type: String,
        default: new Date().toDateString()     
    }
})

const CustomerModel = mongoose.model("Customer",CustomerSchema)
module.exports = CustomerModel;