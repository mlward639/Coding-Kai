const db = require('../config/connection');
const { Questions } = require('../models');
const questionSeeds = require('./questionSeeds.json');

db.once('open', async () => {
  try {
    // await Questions.deleteMany({});
    await Questions.create(questionSeeds);
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
