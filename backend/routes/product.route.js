import express from 'express';
import { getProducts, updateProduct, createProduct, deleteProduct } from '../controllers/product.controllers.js';

const router = express.Router();


router.get('/', getProducts);

router.put('/:id', updateProduct);

router.post('/', createProduct);

router.delete('/:id', deleteProduct);


export default router;