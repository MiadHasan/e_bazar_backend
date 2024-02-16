import mongoose from 'mongoose';
import Product from '../models/product.js';

export const createProduct = async (req, res) => {
  const product = req.body;
  try {
    const newProduct = new Product(product);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(409).json(err);
  }
}

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json(err);
  }
}

export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const product = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(productId)) throw new Error("No product with this id!");
    const updatedProduct = await Product.findByIdAndUpdate(productId, product, {
      new: true,
    });
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(404).json(err);
  }
}

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(productId)) throw new Error("No product with this id!");
    const deletedProduct = await Product.findByIdAndDelete(productId);
    res.status(200).json(deletedProduct);
  } catch (err) {
    res.status(404).json(err);
  }
}