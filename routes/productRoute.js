const express = require('express');

const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController.js')

const productRoute = express.Router();

productRoute.get('/', getProducts);

productRoute.get('/:id', getProduct);


productRoute.post('/', createProduct);

// update a product
productRoute.put('/:id', updateProduct);

// delete a product

productRoute.delete('/:id', deleteProduct);

module.exports = productRoute;