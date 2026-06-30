const productModel = require("../models/product.model");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

// Get all products
async function getProducts(req, res) {
  try {
    const products = await productModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
}

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
      image: image ? image.secure_url : null,
    });

    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating product", error: error.message });
  } finally {
    if (req.file) {
        fs.unlink(req.file.path, (err) => {
        if (err) {
          console.log("Delete Error:", err);
        } else {
          console.log("File deleted successfully");
        }
      });
    }
  }
}

// Get a product by ID
async function getProductsById(req, res) {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching product", error: error.message });
  }
}

// Update a product by ID
async function updateProduct(req, res) {
  try {
    const { name, description, price, category, stock } = req.body;
    const image = req.file ? await cloudinary.uploadImage(req.file.path) : null;
    const updatedProduct = await productModel.findById(req.params.id);
    if (updatedProduct) {
      updatedProduct.name = name || updatedProduct.name;
      updatedProduct.description = description || updatedProduct.description;
      updatedProduct.price = price || updatedProduct.price;
      updatedProduct.category = category || updatedProduct.category;
      updatedProduct.stock = stock || updatedProduct.stock;
      if (image) {
        updatedProduct.image = image.secure_url;
      }
      await updatedProduct.save();
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  } finally {
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.log("Delete Error:", err);
        } else {
          console.log("File deleted successfully");
        }
      });
    }
  }
}

// Delete a product by ID
async function deleteProduct(req, res) {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await product.remove();
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting product", error: error.message });
  }
}

module.exports = {
  getProducts,
  createProduct,
  getProductsById,
  updateProduct,
  deleteProduct,
};
