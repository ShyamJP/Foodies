const CustomerModel = require("./../models/Customer");
const OrderModel = require("./../models/Order")

const getOrders = async(req,res) =>{
    const Id = req.body.Id;
    await CustomerModel.findById(Id).then(async()=>{
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
}

const placeOrder = async(req,res)=>{
    const {Id,cartItems,Total} = req.body;
    try{
    const user = await CustomerModel.findById(Id);

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
}

module.exports = {getOrders , placeOrder};