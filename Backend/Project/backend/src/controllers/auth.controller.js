const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sendEmail } = require("../utils/send.email");
const userModel = require("../models/user.model");

// Generate JWT Token
function generateToken(id, role) {
  return jwt.sign(
    {
      id,
      role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    },
  );
}

async function registerUser(req, res) {
  const { name, email, password, role = "user" } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      name,
      email,
      password: hash,
      role,
    });

    if (newUser) {

      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      const message = `
      Welcome to ShopNest, ${name}!
      Your OTP for ShopNest registration is: ${otp}
      `;

      await sendEmail(email, "Welcome to ShopNest - Your OTP for Registration", message);

      res.status(201).json({ message:"User registered successfully. Please check your email for the OTP." });
    
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }

  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "Server error" });
  
  }
}

async function loginUser(req, res) {

  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id, user.role),
      });
    } else {
      res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}

async function getUsers(req, res) {
  try {

    const users = await userModel.find({}).select("-password");
    res.json(users);

  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "Server Error" });
  
  }
}

async function logoutUser(req, res) {
  res.send("Logout");
}

module.exports = {
  registerUser,
  loginUser,
  getUsers,
  logoutUser,
};
