const router = require("express").Router();
const Character = require('../../models/Character');
const ObjectId = require('mongodb').ObjectId;

// Get all characters from db
router.get('/', async (req, res) => {
    try {
        const characterData = await Character.find();
        if (!characterData) {
            res.status(404).json({ message: "No characters found! " });
            return;
        }

        res.status(200).json(characterData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Get a single character by ID
router.get('/:id', async (req, res) => {
  try {
    const characterData = await Character.findOne({
      _id: req.params.id,
    });
    if (!characterData) {
      res.status(404).json({ message: 'No character with this id found!' });
    }

    res.status(200).json(characterData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get character by user id
router.get('/user/:userid', async (req, res) => {
  // console.log(req.params.userid);
  try {
    const characterData = await Character.find({ "user_id": ObjectId(req.params.userid) }); // Find all characters with userid in params
    // console.log(characterData);
    if (!characterData.length) {
      res.status(404).json({ message: 'No characters found for this user!' });
    }

    res.status(200).json(characterData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
