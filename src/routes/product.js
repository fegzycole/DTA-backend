import { Router } from 'express';
import { validateProduct, isImageUploaded } from '../middleware/validation';
import uploadImage from '../middleware/imageUpload';
import addProduct from '../controller/product.controller';

const router = Router();

router.post(
  '/',
  uploadImage,
  isImageUploaded,
  validateProduct,
  addProduct
);

export default router;
