const mongoose = require('mongoose')
require('dotenv').config()


// const URL = process.env.DB_URL;
// DB = mongoose.connect(URL)
DB =mongoose.connect("mongodb://localhost:27017/Food-Order-App")
.then(()=>{ console.log("DB connected....") })
.catch((err)=>console.log(err))

module.exports = {DB}; 