import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getTopProducts,
  getFeaturedProducts,
  getSellerProducts,
} from '../controllers/product.controller.js';
import { protect, seller, approvedSeller } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(protect, seller, approvedSeller, createProduct);

router.get('/top', getTopProducts);
router.get('/featured', getFeaturedProducts);
router.get('/seller', protect, seller, getSellerProducts);

router.route('/:id')
  .get(getProductById)
  .put(protect, seller, approvedSeller, updateProduct)
  .delete(protect, seller, approvedSeller, deleteProduct);

export default router;
