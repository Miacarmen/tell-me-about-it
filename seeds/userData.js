const { User } = require("../models");

const userData = [
  {
    username: "some1",
    password: "password123",
  },
  {
    username: "another1",
    password: "password456",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
