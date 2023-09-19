const createProduct = async (req, res) => {
  try {
    const { body } = req;

    console.log('BODY', body)

    const response = await Promise.resolve('Nuevo producto');

    res.send(response);
  } catch (error) {
    res.status(400).json({ error: `Error to create product: ${error.message}`});
  }
}

module.exports = {
  createProduct,
}