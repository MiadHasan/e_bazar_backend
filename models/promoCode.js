import mongoose from 'mongoose';

const promoCodeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  usage: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  useLimit: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  }
});

const PromoCode = mongoose.model('PromoCode', promoCodeSchema);

export default PromoCode;