const Product = require('../models/product');

// Display all products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.render('products/index', { products });
};

// Display product details
exports.getProductDetails = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('products/details', { product });
};
