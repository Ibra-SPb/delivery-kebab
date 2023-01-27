const router = require('express').Router();
const Main = require('../views/Main');

const { User, Product, Order } = require('../db/models');

// GET /
router.get('/', async (req, res) => {
  if (req.session.userId) {
    const { userId } = req.session;
    const user = await User.findByPk(Number(userId), { raw: true });
    const products = await Product.findAll();
    const orders = await Order.listWithProduct(userId);

    res.renderComponent(Main, {
      title: 'Главная', user, products, orders,
    });
  } else {
    const status = 'create';
    const products = await Product.findAll();
    const orders = await Order.listWithOrders(status);
    res.renderComponent(Main, {
      title: 'Главная', products, orders,
    });
  }
  // let name;
  // let role;
  // if(req.session.user_id) {
  // let user = await User.findOne({where: req.session.user_id})
  //   name = user.login;
  //   role = user.role;
  // }
  // res.renderComponent(Main, {title: 'Main page', name, role})
});

router.post('/', async (req, res) => {
  console.log(req.body)
})

module.exports = router;
