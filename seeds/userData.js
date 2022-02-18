
const { User } = require('../models');

const userdata = [
  {
    username: "Andy",
    password: "password12345",
  },
  {
    username: "Lisa",
    password: "password12345",
  },
  {
    username: "Harold",
    password: "password12345",
  },
  {
    username: "Jack",
    password: "password12345",
  },
  {
    username: "Bill",
    password: "password12345",
  },
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;