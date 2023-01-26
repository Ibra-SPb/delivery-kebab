const router = require('express').Router();
const Main = require('../views/Main');
const { User, Order, Product } = require('../db/models');

router.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = userId && (await User.findByPk(Number(userId)));
  const allOrders = await Order.findAll();
  // const manyProducts = await Product.findAll();
  const manyProducts = await Order.findAll({
    where: { userId },
    include: [{ model: Product, key: 'productId' }],
    raw: true,
  });
  res.renderComponent(Main, {
    title: 'Главная',
    user,
    allOrders,
    manyProducts,
  });
});

module.exports = router;
