const { BlogPost } = require("../models");

const postsData = [
  {
    'post_title': "Title",
    'post_body': 'Something about something',
    'user_id': 1
  },
];

const seedBlog = () => 
    BlogPost.bulkCreate(postsData);

module.exports = seedBlog;