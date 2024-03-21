const DataModel = require('./../models/DataModel')

const Products = async(req,res)=>{
    await DataModel.find({})
    .then((result)=>res.json({result, message:"All Products received"}))
    .catch((err)=>{
        return res.json(err)
        console.log(err);
    })
}
module.exports = Products;