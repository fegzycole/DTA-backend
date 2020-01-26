import { Router } from 'express';
import {
  validateProduct,
  isImageUploaded,
  validateId
} from '../middleware/validation';
import uploadImage from '../middleware/imageUpload';
import { addProduct, getProduct } from '../controller/product.controller';

const router = Router();

router.post('/', uploadImage, isImageUploaded, validateProduct, addProduct);

router.get('/:id', validateId, getProduct);

export default router;
