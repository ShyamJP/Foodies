const express = require('express')
const app = express()
const CustomerModel = require('./../models/Customer')

app.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    await CustomerModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password)
            { 
                res.json({user})
                // res.json(user.email)
                // localStorage.setItem("email",user.email)
            }
            else
                res.json("Password is Incorrect")
        }
        else
            res.json("No User is Exist")    ;
    })
})

app.post('/register',(req,res)=>{
    CustomerModel.create(req.body)
    .then(custommers => res.json(custommers))
    .catch(err => res.json(err))
})

module.exports = app