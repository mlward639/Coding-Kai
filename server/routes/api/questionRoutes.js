const router = require('express').Router();
const Questions = require('../../models/Questions');

const index = Math.floor(Math.random() * 57); //change 57 to seeds array.length

// router.get('/:id', async (req, res) => {
//   try {
//     const questionData = await Questions.findOne({
//       id: req.params.id,
//     });
//     console.log('here', questionData);
//     if (!questionData) {
//       res.status(404).json({ message: 'No question found!' });
//     }
//     res.status(200).json(questionData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.get('/', async (req, res) => {
  try {
    const questionData = await Questions.find({});
    console.log('here', questionData);
    if (!questionData) {
      res.status(404).json({ message: 'No question found!' });
    }
    res.status(200).json(questionData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
