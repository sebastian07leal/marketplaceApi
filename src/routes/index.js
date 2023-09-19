const express = require('express');
const { createProduct } = require('../controllers/products');

const router = express.Router();

//Avalible
router.get('/ping', (_req, res) => {
  res.send('Pong');
});

//Product
router.post('/product', createProduct);

module.exports = router;