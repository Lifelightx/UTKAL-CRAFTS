import express from 'express';
import {
  registerSeller,
  loginSeller,
  getSellerProfile,
  updateSellerProfile,
  addSellerAddress,
  updateSellerAddress,
  deleteSellerAddress,
} from '../controllers/seller.controller.js';
import { protect } from '../middleware/sellerAuth.js';

const router = express.Router();

router.post('/register', registerSeller);
router.post('/login', loginSeller);
router.route('/profile')
  .get(protect, getSellerProfile)
  .put(protect, updateSellerProfile);
router.route('/address')
  .post(protect, addSellerAddress);
router.route('/address/:id')
  .put(protect, updateSellerAddress)
  .delete(protect, deleteSellerAddress);

export default router;
