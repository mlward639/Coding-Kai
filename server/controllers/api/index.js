const router = require('express').Router();
const gameRoutes = require('./gameroutes');

router.use('/', gameRoutes);

module.exports = router;
