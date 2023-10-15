import express from 'express';

import { loginUser } from '../controllers/auth';
import { authMiddleware } from '../middleware/auth';
import { createUser, deleteUser } from '../controllers/user';
import { allSectors, createSector, putSectorById } from '../controllers/sector';
import {
    createProduct,
    allProducts,
    productById,
    putProductById,
    deleteProduct,
} from '../controllers/products';

const router = express.Router();

//Avalible
router.get('/ping', (_req, res) => {
    res.send('Pong');
});

//Auth
router.post('/login', loginUser);

//User
router.post('/user', createUser);
router.delete('/user', authMiddleware, deleteUser);

//Product
router.post('/product', createProduct);
router.put('/product/:id', putProductById);
router.delete('/product/:id', authMiddleware, deleteProduct);
router.get('/product/all', allProducts);
router.get('/product/:id', productById);

//Sector
router.get('/sector/all', allSectors);
router.post('/sector', createSector);
router.put('/sector/:id', putSectorById);

export default router;
