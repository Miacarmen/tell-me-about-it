const router = require("express").Router();
const { Post, BlogPost } = require("../../models");
const withAuth = require("../../utils/auth");

// POST CREATE blogpost
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await BlogPost.create({
      title: req.body.title,
      post_body: req.body.post_body,
      user_id: req.session.user_id,
    });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT UPDATE post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatePost = await BlogPost.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(updatePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletePost = await BlogPost.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
