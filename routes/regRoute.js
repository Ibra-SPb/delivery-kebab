const router = require('express').Router();
const bcrypt = require('bcrypt');
const Reg = require('../views/Reg');
const { User } = require('../db/models');

router
  .get('/', (req, res) => {
    res.renderComponent(Reg, { title: 'Регистрация' });
  })
  .post('/', async (req, res) => {
    const {
      name, email, phone, role, address, password,
    } = req.body;
    try {
      if (!name || !email || !phone || !role || !address || !password) {
        return res
          .status(400)
          .json({ message: 'Необходимо заполнить все поля', status: false });
      }
      const user = await User.findOne({ where: { email } });
      if (user) {
        return res
          .status(400)
          .json({
            message: 'Пользователь с таким e-mail уже зарегистрирован!',
            status: false,
          });
      }
      const passwordBC = await bcrypt.hash(
        password,
        Number(process.env.SALT_ROUNDS),
      );
      const newUser = await User.create({
        name,
        email,
        phone,
        role,
        address,
        password: passwordBC,
      });
      req.session.userId = newUser.id;
      res.status(201).json({ message: 'success', status: true });
    } catch (e) {
      res.json({ message: e.message });
    }
  });

module.exports = router;
