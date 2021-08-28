const router = require('express').Router();
const Enemy = require('../../models/Enemy');

// Get all enemies from db
router.get('/', async (req, res) => {
  try {
    const enemyData = await Enemy.find();
    if (!enemyData) {
      res.status(404).json({ message: 'No enemies found!' });
      return;
    }

    res.status(200).json(enemyData);
  } catch (err) {
    res.status(400).json(err);
  }

  // res.status(200).json(enemyData);
  // } catch (err) {
  //   res.status(400).json(err);
  // }
});

// Get enemy by id
router.get('/:id', async (req, res) => {
  try {
    const enemyData = await Enemy.findOne({
      id: req.params.id,
    });
    if (!enemyData) {
      res.status(404).json({ message: 'No enemy with this id found!' });
    }

    res.status(200).json(enemyData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
