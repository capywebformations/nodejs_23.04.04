const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController')

// /posts
router
    .route('/')
    .get(postController.listAllPosts)
    .post(postController.createAPost);

// /posts/:id_post
// :id_post = req.params.id_post
// router
//     .route('/:id_post')
//     .get(postController.getAPost)
//     .put(postController.updateAPost)
//     .delete (postController.deleteAPost);

module.exports = router;