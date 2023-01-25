const router = require('express').Router();
const Main = require('../views/Main');

router.get('/', async (req, res) => {
  res.renderComponent(Main);
});

module.exports = router;
