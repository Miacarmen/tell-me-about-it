// establish relationships between models

// require models
const User = require('./User');
const Post = require('./BlogPost');
const Comment = require('./Comment');

// User has many blogposts
// User has many Comments

// BlogPost belongs to User
// BlogPost has many Comments

// Comment belongs to User
// Comment belongs to BlogPost

module.exports = {
    User,
    BlogPost,
    Comment
};