const router = require('express').Router();
const Main = require('../views/Main');

const { User, Product, Order } = require('../db/models');

// GET /
router.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = userId && (await User.findByPk(Number(userId)));
  const products = await Product.findAll()
  const orders = await Order.listWithProduct(userId);

  res.renderComponent(Main, { title: 'Главная', user, products, orders });
  // let name;
  // let role;
  // if(req.session.user_id) {
  // let user = await User.findOne({where: req.session.user_id})
  //   name = user.login;
  //   role = user.role;
  // }
  // res.renderComponent(Main, {title: 'Main page', name, role})
});

module.exports = router;
