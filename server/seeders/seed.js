const db = require('../config/connection');
const { Questions } = require('../models/Questions');
const questionSeeds = require('./questionSeeds.json');

db.once('open', async () => {
  await Questions.deleteMany({});
  await Questions.create(questionSeeds);

  console.log('all done!');
  process.exit(0);
});
