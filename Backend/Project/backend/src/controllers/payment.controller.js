const razorpay = require("razorpay");   
const crypto = require("crypto");   
const dotenv = require("dotenv");
const Order = require("../models/order.model");
dotenv.config();

const instance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

async function createOrder(req, res) {
  try {
    const options = {
      amount: req.body.amount * 100, // Amount in paise
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    const order = await instance.orders.create(options);
    res.status(200).json(order);
  }     catch (error) {
    res.status(500).json({ message: "Server error" });
  } 
}


async function verifyPayment(req, res) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature === razorpay_signature) {
      // Payment is verified, you can update your order status in the database here
      await Order.findOneAndUpdate(
        { razorpay_order_id },
        { $set: { paymentStatus: "Paid" } }
      );
      res.status(200).json({ message: "Payment verified successfully" });
    } else {
      res.status(400).json({ message: "Payment verification failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  createOrder,
  verifyPayment,
};