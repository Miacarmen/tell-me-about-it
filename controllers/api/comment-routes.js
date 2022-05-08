// when user clicks on exsisting post
// then they have the option to leave a comment

// when they enter a comment and slick submit
// then it is saved and the post is updated to display the new comment with the creator's username and date created

const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all comments

// GET create a comment


module.exports = router;