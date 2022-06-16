const express = require('express');
// const middleware = require('../middlewares/index');

const talkersRoutes = express.Router();
const services = require('../services');

talkersRoutes.get('/', services.getAll);

module.exports = talkersRoutes;