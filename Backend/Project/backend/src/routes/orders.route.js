const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth.middleware');
const admin = require('../middleware/admin.middleware');
const { createOrder, getOrders, myOrders, updateOrderStatus } = require('../controllers/order.controller');


router.route('/').post(protect, createOrder).get(protect, admin, getOrders);
router.route('/myorders').get(protect, myOrders);
router.route('/:id/status').put(protect, admin, updateOrderStatus);










module.exports = router;