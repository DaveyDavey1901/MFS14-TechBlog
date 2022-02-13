const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

//force: true adds a DROP TABLE IF EXISTS
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
