const router = require('express').Router();
// homeroutes does the following: login,signup,delete, and update
const homeRoutes = require('./homeroutes');
router.use('/api', homeRoutes);
module.exports = router;
