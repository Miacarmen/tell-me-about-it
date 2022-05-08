// user presented with all blog posts they have created
// have the option to add a new blog post
// when button to add new post is clicked
// then prompt to enter title and contents for the post
// when finished and button to create the post is clicked
// then the title and contents of the post are saved
// then redirects to dashboard that shows the new blog post

const router = require('express').Router();
const { BlogPost, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all blogposts

// GET new blog post

// GET post by id 


module.exports = router;