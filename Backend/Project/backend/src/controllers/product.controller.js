const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/send.email");
const productModel = require("../models/product.model");
const cloudinary = require("../utils/cloudinary");



// Get all products
async function getAllProducts(req, res) {
    try {
        const products = await productModel.find({});
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
};


// Create a new product
async function createProduct(req, res) {
    try {
        const { name, description, price, category, stock } = req.body;
        const image = req.file ? await cloudinary.uploadImage(req.file.path) : null;

        const newProduct = new productModel({
            name,
            description,
            price,
            category,
            stock,
            image: image ? image.secure_url : null
        });

        await newProduct.save();
        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error: error.message });
    }
};



// Get a product by ID
async function getProductById(req, res) {
    try {
        const product = await productModel.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error: error.message });
    }
};

// Update a product by ID
async function updateProduct(req, res) {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
};      

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct
};