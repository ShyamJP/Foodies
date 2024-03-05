const express = require('express')
const cors = require('cors')
const encoder = require('encoder')
const DB = require('./DB/db');
const auth = require('./Auth/auth')
const OrderRoute = require('./Routes/Order')
const ProductRoute = require('./Routes/ProductData')
const PORT = process.env.PORT || 3001;

const app = express()
app.use(express.json())
app.use(cors())

app.use('/',auth);
app.use('/',OrderRoute);
app.use('/data',ProductRoute)


// nodemailer initialise
var nodemailer = require('nodemailer');
const bp = require('body-parser');
const { default: OrderModel } = require('./models/Order');



// mail request start
app.post("/cart/mail", encoder, function (req, res) {
    let mail = req.body.email;
    let message = req.body.amount;
    let msg = JSON.stringify(message);
    console.log(msg);
  
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: 'shyam.pankhaniya5@gmail.com',
        pass: 'jhvgwlxhxezvhbol'    //ubvphiizcurlfxvg
      }
    });
  
    var mailOptions = {
      from: 'shyam.pankhaniya5@gmail.com',
      to: `${mail}`,
      subject: 'Your Order Confirmation and Payment Details',
      text: ` Dear ${mail},
            I hope this message finds you well. We are delighted to confirm your recent order on our e-commerce platform. Thank you for choosing MY SHOP for your online shopping needs.
      
        Date of Order: ${currentDate}
        Here are the details of your order:
        Total Amount: Rs.${msg}🪙
        Payment Method: Cash on delivery
  
            Your payment for this order has been successfully processed, and the total amount of Rs${msg} has been charged to your Cash on Delivery. If you have any questions or concerns regarding your order, please do not hesitate to reach out to our customer support team at myshopcustomercare@gmail.com / 000 111 1234. We are here to assist you.
  
        Estimated Delivery Date: Within a Week
            
        You will receive a separate email with your tracking information once your order has been dispatched. Please allow some time for processing and shipping.
            
        Thank you for shopping with us. We appreciate your business and look forward to serving you again in the future. If you have any feedback or suggestions, we'd love to hear from you.
            
        Best regards,
            
        @sumanpankhaniya
        Order Mail
        MyShop.com
        [Website URL]
        [Contact Information]`
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  
  }
  );

// mail request end

app.get('/home',async(req,res)=>{
    // const email = await localStorage.getItem("email")
    res.send("hello")
})
app.listen(PORT,console.log("server is running.. on http://localhost:3001/"))