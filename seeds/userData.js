
const { User } = require('../models');

const userdata = [
  {
    username: "Andy",
    email: "andy@mail.com",
    password: "password12345",
  },
  {
    username: "Lisa",
    email: "lisa@mail.com",
    password: "password12345",
  },
  {
    username: "Harold",
    email: "harold@mail.com",
    password: "password12345",
  },
  {
    username: "Jack",
    email: "jack@mail.com",
    password: "password12345",
  },
  {
    username: "Bill",
    email: "bill@mail.com",
    password: "password12345",
  },
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;