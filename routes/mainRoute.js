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
    const allOrders = await Order.listProduct();

    res.renderComponent(Main, {
      title: 'Главная', user, products, orders, allOrders,
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
  const { title, address, discount } = req.body
  console.log(title, address, discount)
  try {
    if (title && address && discount) {
      const product = await Product.findOne({ where: { title } })
      const orderNew = await Order.create({ userId: req.session.userId, productId: product.id, address, status: 'create', discount, phone: '89999999999' })
      console.log(orderNew)
      res.status(201).json({ message: 'Кебаб добавлен!', status: true })
    }
  }
  catch (e) {
    res.status(404).json({ message: e.message });
  }
})

router.put('/:id', async (req, res) => {
  const { userId } = req.session
  const { id } = req.params;
  console.log(userId)
  const user = await User.findOne({ where: { id: userId } })
  console.log(user)
  try {
    if (user.role === 'courier') {
      const order = await Order.update(
        { status: 'closed' },
        {
          where: { id },
          returning: true
        }
      )
      if (order) {
        res.json({ message: 'success' })
      }
    } else if (user.role === 'customer') {
      const order = await Order.update(
        {
          status: 'ordered'
        },
        {
          where: { id },
          returning: true
        }
      )
      if (order) {
        res.json({ message: 'success' })
      }
    }
  } catch (e) {
    console.log(e.message)
    res.end()
  }
})

// router.put('/:idd', async (req, res) => {

// })


module.exports = router;
