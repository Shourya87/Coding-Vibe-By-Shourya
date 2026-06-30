const orderModel = require("../models/order.model");
const { sendOrderConfirmationEmail } = require("../utils/send.email");

// Create a new order
async function createOrder(req, res) {
  try {
    const { products, totalAmount, address, paymentId } = req.body;

    if (
      !products ||
      products.length === 0 ||
      !totalAmount ||
      !address ||
      !paymentId
    ) {
      return res.status(400).json({ message: "Missing required order fields" });
    } else {
      const newOrder = await orderModel.create({
        user: req.user.id,
        products,
        totalAmount,
        address,
        paymentId,
      });
      
      const populatedOrder = await orderModel
        .findById(newOrder._id)
        .populate("products.productId", "name");

      await sendOrderConfirmationEmail(
        req.user.email,
        req.user.name,
        populatedOrder,
      );
      res
        .status(201)
        .json({ message: "Order created successfully", order: newOrder });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating order", error: error.message });
  }
}

// Get all orders for the authenticated user
async function getOrders(req, res) {
  try {
    const orders = await orderModel
      .find()
      .populate("user", "name email")
      .populate("products.productId", "name price");
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching orders", error: error.message });
  }
}

// Get a specific order by ID
async function myOrders(req, res) {
  try {
    const orders = await orderModel
      .find({ user: req.user.id })
      .populate("products.productId", "name price");
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching order", error: error.message });
  }
}

// Update order status (admin only)
async function updateOrderStatus(req, res) {
  try {
    const { status } = req.body;
    const order = await orderModel.findById(req.params.id);

    if (order) {
      order.status = status;
      await order.save();
      res.json({ message: "Order status updated successfully", order });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating order status", error: error.message });
  }
}

module.exports = {
  createOrder,
  getOrders,
  myOrders,
  updateOrderStatus,
};
