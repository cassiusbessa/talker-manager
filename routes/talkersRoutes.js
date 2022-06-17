const express = require('express');
// const middleware = require('../middlewares/index');

const talkersRoutes = express.Router();
const services = require('../services');

talkersRoutes.get('/talker', services.getAll);
talkersRoutes.get('/talker/:id', services.getById);
talkersRoutes.post('/login', services.login);

module.exports = talkersRoutes;