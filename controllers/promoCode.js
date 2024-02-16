import mongoose from 'mongoose';
import PromoCode from '../models/promoCode.js';

export const createPromoCode = async (req, res) => {
  const promoCode = req.body;
  try {
    const newPromoCode = new PromoCode(promoCode);
    await newPromoCode.save();
    res.status(201).json(newPromoCode);
  } catch (err) {
    res.status(409).json(err);
  }
}


//Have to change the logic of updating promo code
export const updatePromoCode = async (req, res) => {
  const promoCodeId = req.params.id;
  const promoCode = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(promoCodeId)) throw new Error("No promoCode with this id!");
    const updatedPromoCode = await PromoCode.findByIdAndUpdate(promoCodeId, promoCode, {
      new: true,
    });
    res.status(200).json(updatedPromoCode);
  } catch (err) {
    res.status(404).json(err);
  }
}