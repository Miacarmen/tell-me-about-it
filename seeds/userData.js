const { User } = require('../models');

const users = [
    {
        'username': 'some1',
        'password': 'password123'
    },
    {
        'username': 'another1',
        'password': 'password456'
    }
];

const seedUser = () => {
    User.bulkCreate(users, {
        individualHooks: true,
        returning: true,
    });
};

module.exports = seedUser;