const express = require('express')
const cors = require('cors')
const encoder = require('encoder')
const DB = require('./DB/db');
const PORT = process.env.PORT || 3001;
const router = require('./Routes/user');

const app = express()
app.use(express.json())
app.use(cors())

app.use('/',router);

app.get('/home',async(req,res)=>{
    // const email = await localStorage.getItem("email")
    res.send("hello")
})
app.listen(PORT,console.log("server is running.. on http://localhost:3001/"))