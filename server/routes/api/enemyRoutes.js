const router = require("express").Router();
const Enemy = require('../models/Enemy');

router.get('/', async (req, res) => {
    try {
        const enemyData = await Enemy.findAll();
        if (!enemyData) {
            res.status(404).json({ message: "No enemies found!" });
            return;
        }

        res.status(200).json(enemyData);
    } catch (err) {
        res.status(400).json(err);
    }
    
});

router.get('/:id', async (req, res) => {
    try {
        const enemyData = await Enemy.findOne({
            _id: req.params.id,
        });
        if (!enemyData) {
            res.status(404).json({ message: "No enemy with this name found!" });
        }

        res.status(200).json(enemyData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;