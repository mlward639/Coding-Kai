const router = require('express').Router();
<<<<<<< HEAD
=======
// const gameRoutes = require('./gameroutes');
>>>>>>> efe463b248ed0c6e356297be883834c9593d6ea4
const characterRoutes = require('./characterRoutes');
const enemyRoutes = require('./enemyRoutes');
const questionRoutes = require('./questionRoutes');

<<<<<<< HEAD
=======
// router.use('/', gameRoutes);
>>>>>>> efe463b248ed0c6e356297be883834c9593d6ea4
router.use('/character', characterRoutes);
router.use('/enemy', enemyRoutes);
router.use('/question', questionRoutes);

module.exports = router;
