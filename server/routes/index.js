const router = require('express').Router();
// const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes');


router.use('/api', homeRoutes);

// router.use('/api', apiRoutes);

module.exports = router;
