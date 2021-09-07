const { Comment } = require('..models');

const commentData = [{
        comment_text: "Your comment here.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Another comment here.",
        user_id: 2,
        post_id: 2
    }, 
    {
        comment_text: "Even more comments here.",
        user_id: 3,
        post_id: 3
    }, 
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;