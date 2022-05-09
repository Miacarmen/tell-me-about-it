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

const router = require("express").Router();

const { User, BlogPost, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET all blog posts and join with user data
router.get("/", async (req, res) => {
  try {
    const postData = await BlogPost.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
    // serialize data so handlebars template can read it
    const posts = postData.map((post) =>
      post.get({
        plain: true,
      })
    );
    // pass serialized data and session flag into template
    res.render("all-posts", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one post by id
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await BlogPost.findOne({
            where: {id: req.params.id},
            include: [User, {
                // ****** WHAT
                model: Comment,
                include: User,
            },
        ],
        });
        if(postData) {
            // use .get({ plain: true  }) on the obj to serialize it so that it only includes the data needed before passing it to the templates in the View
            const post = postData.get({ plain: true });
            // pass serialized data and session flag into template
            res.render('single-post', { post, logged_in: req.session.loggedIn });
        } else {
            res.status(400).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET login
router.get('/login', (req, res) => {
    // If a session exsists and user is already logged in, redirect the request to the dashboard
    if(req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

// GET signup
router.get('/signup', (req, res) => {
    if(!req.session.logged_in) {
        res.redirect('/signup');
    }
    res.render('signup');
});



module.exports = router;

