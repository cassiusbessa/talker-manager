const express = require('express');
// const middleware = require('../middlewares/index');

const talkersRoutes = express.Router();
const services = require('../services');
const middlewares = require('../middlewares');

talkersRoutes.get('/talker', services.getAll);
talkersRoutes.get('/talker/:id', services.getById);
talkersRoutes.post('/login', middlewares.loginValidator, services.login);
talkersRoutes.post('/talker', middlewares.tokenValidator, middlewares.newTalkerValidator, 
services.newTalker);
talkersRoutes.put('/talker/:id', middlewares.tokenValidator, middlewares.newTalkerValidator, 
services.editTalker);
talkersRoutes.delete('/talker/:id', middlewares.tokenValidator, services.deleteTalker);

module.exports = talkersRoutes;