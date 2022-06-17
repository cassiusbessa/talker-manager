const express = require('express');

const router = express.Router();
const talkersRoutes = require('./talkersRoutes');
const middlewares = require('../middlewares');

router.use('/', talkersRoutes);

module.exports = router;
