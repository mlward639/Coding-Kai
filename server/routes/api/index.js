const router = require('express').Router();
const gameRoutes = require('./gameroutes.js');

router.use('/', gameRoutes);

module.exports = router;
