const express = require('express');
const { createProduct, allProducts, productById, putProductById, deleteProduct } = require('../controllers/products');

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


module.exports = router;