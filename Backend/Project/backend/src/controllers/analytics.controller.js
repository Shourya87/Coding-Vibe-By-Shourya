const Order = require("../models/order.model");
const User = require("../models/user.model");
const Product = require("../models/product.model");

async function getAdminStats(req, res) {
  try {
    const totalUsers = await User.countDocuments({});
    const totalOrders = await Order.countDocuments({});
    const totalProducts = await Product.countDocuments({});

    const orders = await Order.find({});

    const totalRevenueData = orders.reduce(
      (acc, order) => acc + order.totalAmount,
      0,
    );

    res.json({
      totalUsers,
      totalOrders,
      totalProducts,
      totalRevenue: totalRevenueData,
    });
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = getAdminStats;
