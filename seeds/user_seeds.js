const { User } = require('../models');

const userData = [
    {
        username: 'John',
        password: 'jodoe'
    },
    {
        username: 'Jane',
        password: 'jadoe'
    },
    {
        username: 'Jimmy',
        password: 'jidoe'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;