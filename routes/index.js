const router = require('express').Router();
const Main = require('../views/Main');
const { Products } = require('../db/models');

router.get('/', async (req, res) => {
  const products = await Products.findAll();
  res.renderComponent(Main, { products });
});

module.exports = router;
