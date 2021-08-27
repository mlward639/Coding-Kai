const router = require('express').Router();
// homeroutes does the following: login,signup,delete, and update
const homeRoutes = require('./homeroutes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);


module.exports = router;
