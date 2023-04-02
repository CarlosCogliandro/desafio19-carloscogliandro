
import Router from 'express';
import productsController from '../controllers/products.controller.js';
import uploader from '../services/upload.js'

const router = Router();

router.get('/productos', productsController.productsGetAll);

router.post('/productos', uploader.single('image'), productsController.productsSave);

export default router;
