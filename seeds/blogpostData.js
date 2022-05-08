const { BlogPost } = require("../models");

const posts = [
  {
    'post_title': "Title",
    'post_body': 'Something about something',
    'user_id': 1
  },
];

const seedBlogPost = () => {
    BlogPost.bulkCreate(posts);
};

module.exports = seedBlogPost;