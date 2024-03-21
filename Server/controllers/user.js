const express = require("express");
const CustomerModel = require("../models/Customer");
const JWT = require('jsonwebtoken');
const bcrypt = require("bcrypt");
require("dotenv").config();
const Secret = process.env.SECRET;

// const Login =  async (req, res) => {
//     const { email, password } = req.body;
//     await CustomerModel.findOne({ email: email })
//       .then(user => {
//         // if (user) {
//           if (user.password === password) {
//             res.json({ user })
//             // res.json(user.email)
//           }
//           else
//             res.json("Password is Incorrect")

//       })
//       .catch(err=>res.json({message:"User Not Exist",err}))
//   }

// const SignUp = async (req, res) => {
//     CustomerModel.create(req.body)
//       .then(customers => res.json(customers))
//       .catch(err => res.json(err))
//   }
var User;
const Login = async (req, res) => {
  const { email, password } = req.body;
  
  await CustomerModel.findOne({ email })
    .then((user) => {
      const ans =  bcrypt.compare(password, user.password)
      if (ans){
        const token = JWT.sign(
          { email: user.email, userId: user._id }, 
          Secret, 
          { expiresIn: "24h"}
          );
        return res.status(200).json({
            message: "User Loged in Successfully",
            userData:{
              token,
              email:user.email,
              name: user.name,
              id:user._id
            }
          })
      } else {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
};

const SignUp = async (req, res) => {
  const { name, password, email } = req.body;

  let hashPass;
  await bcrypt.hash(password, 10).then((hash) => {
    hashPass = hash;
  });

  try {
    CustomerModel.findOne({ email })
      .then((user) => {
        if (user) {
          return res.status(401).json({ message: "User Already Exist" });
        }

        // if not user so create user
        CustomerModel.create({
          name,
          password: hashPass,
          email,
        })
          .then((result) => {
            res
              .status(201)
              .json({ message: "User Created Successfully", result });
          })
          .catch((err) => {
            res.json({ err });
          });
      })
      .catch((err) => {
        res.json({ err });
      });
  } catch (err) {
    res.status(500).json({ message: "User NOt created Try again", err });
  }
};

module.exports = { Login, SignUp };
