const express = require('express')
const app = express();
const DataModel = require('./../models/DataModel')

app.get('/',async(req,res)=>{
    await DataModel.find({})
    .then((result)=>res.json({result, message:"All Products received"}))
    .catch((err)=>{
        res.json(err)
        console.log(err);
    })
})

module.exports = app;