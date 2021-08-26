const router = require('express').Router();
const characterRoutes = require('./characterRoutes');
const enemyRoutes = require('./enemyRoutes');

router.use('/character', characterRoutes);
router.use('/enemy', enemyRoutes);

module.exports = router;
