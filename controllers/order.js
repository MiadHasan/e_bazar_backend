import mongoose from 'mongoose';
import Order from '../models/order.js';

export const createOrder = async (req, res) => {
  const order = req.body;
  try {
    const newOrder = new Order(order);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(409).json(err);
  }
}

export const getOrders = async (req, res) => {
  try {
    console.log("get")
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(404).json(err);
  }
}

export const updateOrder = async (req, res) => {
  const orderId = req.params.id;
  const order = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(orderId)) throw new Error("No order with this id!");
    const updatedOrder = await Order.findByIdAndUpdate(orderId, order, {
      new: true,
    });
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(404).json(err);
  }
}