
import Router from 'express';
import productsController from '../controllers/products.controller.js';

const router = new Router();

router.get('/productos', productsController.productosGetAll);

router.post('/productos', productsController.productosSave);

export default router;
