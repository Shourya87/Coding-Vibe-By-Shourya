const express = require('express');
const protect = require('../middleware/auth.middleware');
const admin = require('../middleware/admin.middleware');
const router = express.Router();
const { getProducts, getProductsById, createProduct, updateProduct, deleteProduct } = require('../controllers/products.controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });




router.route('/').get(getProducts).post(protect, admin, upload.single('image'), createProduct);
router.route('/:id').get(getProductsById).put(protect, admin, upload.single('image'), updateProduct).delete(protect, admin, deleteProduct);





module.exports = router;