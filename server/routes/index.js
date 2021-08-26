const router = require('express').Router();
// homeroutes does the following: login,signup,delete, and update
const homeRoutes = require('./homeroutes');
const apiRoutes = require('./api');

<<<<<<< HEAD
router.use('/api', apiRoutes);


=======
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

>>>>>>> efe463b248ed0c6e356297be883834c9593d6ea4
module.exports = router;
