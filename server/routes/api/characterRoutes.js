const router = require("express").Router();
const Character = require('../models/Character');

router.get('/', async (req, res) => {
    try {
        const characterData = await Character.find();
        if (!characterData) {
            res.status(404).json({ message: "No enemies found! " });
            return;
        }
        console.log("Characters: ", characterData);

        res.status(200).json(characterData);
    } catch (err) {
        res.status(400).json(err);
    }
    
});

router.get('/:id', async (req, res) => {
    try {
        const characterData = await Character.findOne({
            _id: req.params.id,
        });
        if (!characterData) {
            res.status(404).json({ message: "No character with this id found!" });
        }

        res.status(200).json(characterData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;