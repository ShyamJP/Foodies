const express = require('express')
const app = express();
const OrderModel = require('./../models/Order');
const userModel = require('./../models/Customer')

app.post('/cart',async(req,res)=>{
    const {Id,cartItems,Total} = req.body;
    try{
    const user = await userModel.findById(Id);

    if(user){
        await OrderModel.create(
            {
            UserId:Id ,
            Products:cartItems ,
            Total:Total
            }
        ) 
        .then((result)=>res.json({message:"Order Places successfully" , result}))
        .catch(err=>res.json(err))
    }
    else{
        res.send({message:"User Not Exist"}).status(404);
    }}
    catch(err)
    { console.log(err)}
})

app.post('/orders',async(req,res)=>{
    const Id = req.body.Id;
    const user = await userModel.findById(Id).then(async()=>{
        const Orders = await OrderModel.find({UserId:Id})
        try{
            if(Orders){
                res.json({Orders: Orders})
            }
            else{
                res.json("No Order placed")
            }   
        }
        catch(err)
        {
            res.json(err)
        }
    })
    .catch(err=>{
        res.json({message:"User Not exist"} )
        console.log("usr Not Exist")})

})
module.exports = app
