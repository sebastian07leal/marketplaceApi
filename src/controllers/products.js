const ProductService = require('../services/productService')

const createProduct = async (req, res) => {
  try {
    const { body } = req;

    const response = await ProductService.getInstance().createNewProduct(body);

    res.send(response);
  } catch (error) {
    res.status(400).json({ error: `Product error: ${error.message}`});
  }
};

const allProducts = async (_req, res) => {
  try {
    const response = await ProductService.getInstance().getAllProducts();

    res.send(response);
  } catch (error) {
    res.status(400).json({ error: `Product error: ${error.message}`});
  }
};

const productById = async (req, res) => {
  try {
    const { params: { id } } = req;

    const response = await ProductService.getInstance().getProductsById(id);

    res.send(response);
  } catch (error) {
    res.status(400).json({ error: `Product error: ${error.message}`});
  }
};

const putProductById = async (req, res) => {
  try {
    const { params: { id }, body } = req;

    const response = await ProductService.getInstance().updateProductById(id, body);

    res.send(response);
  } catch (error) {
    res.status(400).json({ error: `Product error: ${error.message}`});
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { params: { id } } = req;

    const response = await ProductService.getInstance().deleteProductById(id);

    res.send(response);
  } catch (error) {
    res.status(400).json({ error: `Product error: ${error.message}`});
  }
}

module.exports = {
  productById,
  allProducts,
  createProduct,
  deleteProduct,
  putProductById,
}