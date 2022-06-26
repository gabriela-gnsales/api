const express = require('express');
const router = express.Router();
const userRouters = require('./user.routes');

router.use('/user', userRouters);

module.exports = router;