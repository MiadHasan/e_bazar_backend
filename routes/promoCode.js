import express from 'express';
import { createPromoCode, updatePromoCode, getPromoCodes } from '../controllers/promoCode.js';

const router = express.Router();

router.post('/', createPromoCode);
router.put('/:id', updatePromoCode);
router.get('/', getPromoCodes);

export default router;
