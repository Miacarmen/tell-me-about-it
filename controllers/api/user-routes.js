const router = require('express').Router();
const { User } = require('../../models');


// POST Signup
router.post('/', async (req, res) => {
    try {
        // Create new user
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        // automatically logs in the user once they are created
        // creates session cookie
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.username = newUser.username;
            // user is logged in
            req.session.logged_in = true;
            res.json(newUser);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST Login
router.post('/login', async (req, res) => {
    try {
        // check if user exsists in db
        const userData = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        // if user does not exist, throw err
        if(!userData) {
            res.status(400).json({ message: 'Incorrect username or password, please try again' });
            return;
        }
        // validate password
        const validPassword = await userData.checkPassword(req.body.password);
        // if password is not valid
        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect username or password, please try again' });
            return;
        }
        // if user is valid, save login session to the db
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


// POST logout
router.post('/logout', (req, res) => {
    // if user is logged in
    if(req.session.logged_in) {
        // destroy session
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(400).end();
    }
});



module.exports = router;