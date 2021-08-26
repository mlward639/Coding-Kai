//IN PROGRESS.........

const router = require('express').Router();
const { User } = require('../models/User');
const userControllers = require('../../controllers/userControllers.js');

router.route('/signup').post(userControllers.createUser);

router.route('/userLogin').put(userControllers.login);

router.route('/updateUser').put(userControllers.update);

router.route('/deleteUser').delete(userControllers.delete);

router.route('/getUsers').get(userControllers.findUsers);

//how are we setting up logged in/out sessions? werent we doing sequelize with session before?
module.exports = router;

//===CHECK FOR LATER======================================================================================
// Get HOMEPAGE

// router.get('/', (req, res) => {
//   res.render('homepage'); // UPDATE NAME OF PAGE TO RENDER WITH REACT PAGE***
//   // If user is not logged in, redirect to login page
//   // console.log('HOMEPAGE');
//   res.json({message: 'login'})
//   if (!req.session.logged_in) {
//     res.redirect('/login'); // UPDATE NAME OF PAGE TO RENDER WITH REACT PAGE***
//     return;
//   }
// });

// // Get LOGIN page
// router.get('/login', (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   if (req.session.logged_in) {
//     res.redirect('/homepage'); // UPDATE NAME OF PAGE TO RENDER WITH REACT PAGE***
//     return;
//   }
//   res.render('login'); // UPDATE NAME OF PAGE TO RENDER WITH REACT PAGE***
// });

// //Post to LOGIN page to log in the application after username and password verification
// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.find({ username: req.body.username });
//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect username or password, please try again' });
//       return;
//     }
//     const validPassword = await userData.validPassword(req.body.password);
//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect username or password, please try again' });
//       return;
//     }
//     req.session.save(() => {
//       req.session.ObjectId = userData.ObjectId;
//       req.session.logged_in = true;
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// Post to sign up
// app.post('/signup', ({ body }, res) => {
//   User.create(body)
//     .then((dbUser) => {
//       res.json(dbUser);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });
//========================================================================================================
