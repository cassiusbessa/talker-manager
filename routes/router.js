const express = require('express');

const router = express.Router();
const talkersRoutes = require('./talkersRoutes');

router.use('/talker', talkersRoutes);

module.exports = router;
