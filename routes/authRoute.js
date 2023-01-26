const router = require('express').Router();
const bcrypt = require('bcrypt');
const Log = require('../views/Log');
const { User } = require('../db/models');

router
  .get('/', (req, res) => {
    res.renderComponent(Log, { title: 'Авторизация' });
  })
  .post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      const validPassword = await bcrypt.compare(password, user.password);
      if (user) {
        if (validPassword) {
          // console.log(user,'==========')
          req.session.userId = user.id;
          return res.status(201).json({ message: 'success', status: true });
        }
      }
      if (!user) {
        return res
          .status(400)
          .json({
            message: 'Пользователя с таким e-mail не существует',
            status: false,
          });
      }
      return res
        .status(400)
        .json({ message: 'Неверный пароль!', status: false });
    } catch (e) {
      res.json({ message: e.message });
    }
  });

module.exports = router;
