require('@babel/register');
require('dotenv').config();
const path = require('path');
const express = require('express');
const db = require('./db/models');
const config = require('./config/config');

const mainRoute = require('./routes/mainRoute');
const regRoute = require('./routes/regRoute');
const logoutRoute = require('./routes/logoutRoute');
const authRoute = require('./routes/authRoute');

const app = express();
const PORT = process.env.PORT ?? 3000;
config(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', mainRoute);
app.use('/reg', regRoute);
app.use('/logout', logoutRoute);
app.use('/auth', authRoute);

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
