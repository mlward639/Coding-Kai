const router = require('express').Router();
// const gameRoutes = require('./gameroutes');
const characterRoutes = require('./characterRoutes');
const enemyRoutes = require('./enemyRoutes');
const questionRoutes = require('./questionRoutes');

// router.use('/', gameRoutes);
router.use('/character', characterRoutes);
router.use('/enemy', enemyRoutes);
router.use('/question', questionRoutes);

module.exports = router;
