import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;