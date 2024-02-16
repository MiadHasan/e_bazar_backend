import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  shippingCharge: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  active: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;