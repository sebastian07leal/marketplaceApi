const express = require('express');
const { createProduct, allProducts, productById, putProductById, deleteProduct } = require('../controllers/products');
const { allSectors, createSector, putSectorById } = require('../controllers/sector');

const router = express.Router();

//Avalible
router.get('/ping', (_req, res) => {
  res.send('Pong');
});

//Product
router.post('/product', createProduct);

router.put('/product/:id', putProductById);

router.delete('/product/:id', deleteProduct);

router.get('/product/all', allProducts);
router.get('/product/:id', productById);

//Sector
router.get('/sector/all', allSectors);

router.post('/sector', createSector);

router.put('/sector/:id', putSectorById);



module.exports = router;