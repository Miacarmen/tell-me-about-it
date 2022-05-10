// when user clicks on exsisting post
// then they have the option to leave a comment

// when they enter a comment and slick submit
// then it is saved and the post is updated to display the new comment with the creator's username and date created

const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all comments
router.get('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: {
                model: User,
            },
        });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.render('single-post', {comments, logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST create a comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment_body: req.body.comment_body,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        });
        res.status(200).json({ comment: newComment });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;