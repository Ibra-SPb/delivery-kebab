const router = require('express').Router();
const Main = require('../views/Main');
const { User, Product } = require('../db/models');

router.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = userId && (await User.findByPk(Number(userId)));
  res.renderComponent(Main, { title: 'Главная', user });
});

module.exports = router;
