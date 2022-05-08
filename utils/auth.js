// login authorization
const withAuth = (req, res, next) => {
    // if user is nott logged in
    if(!req.session.logged_in) {
        // redirect the request to the login in route
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;
