const express = require('express');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const sessionConfig = require('./sessions');
const ssr = require('../middleware/ssr');

const corsOption = {
  origin: ['https://api-maps.yandex.ru'],
};
const serverConfig = (app) => {
  app.use(morgan('dev'));
  app.use(cors(corsOption));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(ssr);
};

module.exports = serverConfig;
