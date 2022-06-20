const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();
const talkersRoutes = require('./talkersRoutes');

router.use('/', rescue(talkersRoutes));

module.exports = router;
