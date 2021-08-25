const router = require('express').Router();
const gameRoutes = require('./gameroutes');
const characterRoutes = require('./characterRoutes');
const enemyRoutes = require('./enemyRoutes');

router.use('/', gameRoutes);
router.use('/character', characterRoutes);
router.use('/enemy', enemyRoutes);

module.exports = router;
