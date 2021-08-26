// GET scores
router.get('/includeuser', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
      const scoreData = await Score.findAll({
        include: [{ model: User }],
      });
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
      res.json(scoreData);
    } catch (err) {
      res.status(500).json(err);
    }
  });