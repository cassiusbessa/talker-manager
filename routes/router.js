const express = require('express');

const router = express.Router();
const talkersRoutes = require('./talkersRoutes');

router.use('/', talkersRoutes);

module.exports = router;
