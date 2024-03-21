const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const URL = process.env.DB_URL;
DB = mongoose.connect(URL)
.then(()=>{ console.log("DB connected....") })
.catch((err)=>console.log(err))

module.exports = {DB}; 