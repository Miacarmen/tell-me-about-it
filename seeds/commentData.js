const { Comment } = require('../models');

const commentData = [
    {
        comment_body: "Some comment about something",
        user_id: 1,
        blogpost_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;