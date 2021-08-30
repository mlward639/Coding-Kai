const router = require('express').Router();
const Character = require('../../models/Character');
const ObjectId = require('mongodb').ObjectId;

//* Get all characters from db
router.get('/all', async (req, res) => {
  try {
    const characterData = await Character.find();
    if (!characterData) {
      res.status(404).json({ message: 'No characters found! ' });
      return;
    }
    res.status(200).json(characterData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//* Get a single character by ID
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

//* Get character by user id
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

//* Route for updating characters. Just include the stats you want to update in the request body, and they will be updated in the character.
// Example: 
// PUT Request to http://localhost:3003/api/character/6129095c379a40808472a82e
// {
// 	"hitPoints": 11,
// 	"level": 4
// }
// In this case, the character's ID that is provided is "Hawk". This updates his hitpoints and level to the new numbers in the body.

router.put('/:id', async (req, res) => {
  try {
    const characterData = await Character.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
    );
    if (!characterData) {
      res.status(404).json({ message: 'No character with this ID found!' });
    }

    res.status(200).json({ message: 'Character updated.' });
  } catch (err) {
    res.status(400).json(err);
  }
});

//* Delete a character by id. Just include their id in the request parameters and character will be deleted from db.
router.delete('/:id', async (req, res) => {
  try {
    const characterData = await Character.findOneAndDelete({ _id: req.params.id });
    if (!characterData) {
      res.status(404).json({ message: 'No character with this ID found! '});
    }

    res.status(200).json({ message: 'Character deleted.' });
  } catch (err) {
    res.status(400).json(err);
  }
});

//* Adds a character to the db.
//! IMPORTANT: Use following format in your request body:
// {
// 	"user_id": [
// 		"6129095c379a40808472a82a" 
// 	],
// 	"name": "Miguel",
// 	"hitPoints": 12,
// 	"attack": 1.5,
// 	"experience": 7,
// 	"level": 5
// }
//! In particular, note that the "user_id" item is the user's id as a string nested within an array. Use this format when making the request, it is the only way mongoose can properly add the character with the user ID actually functioning as a 'foreign key'.
router.post('/', async (req, res) => {
  try {
    const characterData = req.body;
    await Character.create(characterData);

    res.status(200).json({ message: 'New character added!' });
  } catch(err) {
    res.status(400).json(err);
  }
});

module.exports = router;
