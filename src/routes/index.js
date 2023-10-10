const express = require('express');
const { loginUser } = require('../controllers/auth');
const { authMiddleware } = require('../middleware/auth');
const { createUser, deleteUser } = require('../controllers/user');
const {
    allSectors,
    createSector,
    putSectorById,
} = require('../controllers/sector');
const {
    createProduct,
    allProducts,
    productById,
    putProductById,
    deleteProduct,
} = require('../controllers/products');

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

module.exports = router;
