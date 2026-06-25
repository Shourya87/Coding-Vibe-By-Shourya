const user = require("../models/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/send.email')


async function registerUser(req, res) {
  const { name, email, password, role = "user" } = req.body;

  const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET, { expiration: '30d' });


  try {
    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hash = await bcrypt.hash(password, 10)

    const newUser = await user.create({
      name,
      email,
      password: hash,
      role,
    });

    if(newUser){
      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      const message = `
      Welcome to ShopNest, ${name}!
      Your OTP for ShopNest registration is: ${otp}`;

      await sendEmail(email, 'Welcome to ShopNest - Your OTP for Registration', message);

      res.status(201).json({ message: 'User registered successfully. Please check your email for the OTP.'});

    } 
    else {
      res.status(400).json({ message: 'Invalid user data'});
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}



async function loginUser(req, res) {
  res.send("Login");
}




async function logoutUser(req, res) {
  res.send("Logout");
}

module.exports = { registerUser, loginUser, logoutUser };
