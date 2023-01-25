require('@babel/register');
require('dotenv').config();

const express = require('express');
const db = require('./db/models');
const config = require('./config/config');

const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT ?? 3000;
config(app);

app.use('/', indexRouter);

app
  .listen(PORT)
  .on('error', (error) => {
    console.error('Ошибка при запуске веб-сервера');
    console.error(error.message);
  })
  .on('listening', async () => {
    console.log('Веб-сервер слушает порт,', PORT);
    try {
      await db.sequelize.authenticate({ logging: false });
      console.log('БД подключена успешно');
    } catch (error) {
      console.error('Ошибка подключения БД');
      console.error(error.message);
    }
  });
