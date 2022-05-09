// establish relationships between models

// require models
const User = require("./User");
const Post = require("./BlogPost");
const Comment = require("./Comment");
const BlogPost = require("./BlogPost");

// User has many blogposts
User.hasMany(BlogPost, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// User has many Comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// BlogPost belongs to User
BlogPost.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// BlogPost has many Comments
BlogPost.hasMany(Comment, {
  foreignKey: "blogpost_id",
  onDelete: "CASCADE",
});

// Comment belongs to User
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// Comment belongs to BlogPost
Comment.belongsTo(BlogPost, {
  foreignKey: "blogpost_id",
});

module.exports = {
  User,
  BlogPost,
  Comment,
};
