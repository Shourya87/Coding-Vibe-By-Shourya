const Order = require('../models/order.model');
const User = require('../models/user.model');
const Product = require('../models/product.model');


async function getAdminStats (req, res) {
    try {
        const totalUsers = await User.countDocuments({});
        const totalOrders = await Order.countDocuments({});
        const totalProducts = await Product.countDocuments({});

        const orders = await Order.find({});


        const totalRevenueDatta = await orders.aggregate([
            { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" }}}
        ])
    }
}