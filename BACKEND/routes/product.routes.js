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
import upload from '../middleware/upload.js'; // Import the multer upload middleware

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(protect, seller, approvedSeller, upload.array('images', 5), createProduct); // Add upload middleware

router.get('/top', getTopProducts);
router.get('/featured', getFeaturedProducts);
router.get('/seller', protect, seller, getSellerProducts);

router.route('/:id')
  .get(getProductById)
  .put(protect, seller, approvedSeller, upload.array('images', 5), updateProduct) // Add upload middleware
  .delete(protect, seller, approvedSeller, deleteProduct);

export default router;
