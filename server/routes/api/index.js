const router = require('express').Router();
const characterRoutes = require('./characterRoutes');
const enemyRoutes = require('./enemyRoutes');
const questionRoutes = require('./questionRoutes');

router.use('/character', characterRoutes);
router.use('/enemy', enemyRoutes);
router.use('/question', questionRoutes);

module.exports = router;
