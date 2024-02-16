import express from 'express';
import { createPromoCode, updatePromoCode } from '../controllers/promoCode.js';

const router = express.Router();

router.post('/', createPromoCode);
router.put('/:id', updatePromoCode);

export default router;