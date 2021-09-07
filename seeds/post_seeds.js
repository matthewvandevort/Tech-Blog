const { Post } = require('../models');

const postData = [
    {
        title: 'Lorem, ipsum dolor.',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, expedita!',
        user_id: 1
    },
    {
        title: 'Lorem, ipsum dolor 2.',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, expedita!',
        user_id: 2
    },
    {
        title: 'Lorem, ipsum dolor 3.',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, expedita!',
        user_id: 3
    },
     
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;