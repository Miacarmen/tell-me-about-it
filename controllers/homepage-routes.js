const router = require('express').Router();

const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all blog posts and join with user data

// GET one post by id


// GET login



// GET signup


module.exports = router;
// When a new user visits site
// they are presented with the homepage
// includes exsisting blog posts if any have been posted
// navigation link for homepage, dashboard, login

// when homepage link is clicked, then redirect to homepage

// when any of the other links are clicked
// then prompt to login or sign up

// when sign up is clicked
// then prompt to create a useername and password
// when sign-up button is clicked
// then the users credentials are saved to the database and they are now logged in