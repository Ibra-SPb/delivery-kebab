const router = require('express').Router();
const Main = require('../views/Main');
const { Product } = require('../db/models');

router.get('/', async (req, res) => {
  const allProducts = await Product.findAll();
  console.log(allProducts)
  res.renderComponent(Main, { allProducts });
});

module.exports = router;
