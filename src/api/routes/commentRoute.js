const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController')

// /posts/:id_post/comments
router
    .route('/posts/:id_post/comments')
    .get(commentController.listAllComments)
    .post(commentController.createAComment);

// /comments/id_comment
// :id_comment = req.params.id_comment
router
    .route('/comments/:id_comment')
    .get(commentController.getAComment)
    .put(commentController.updateAComment)
    .delete (commentController.deleteAComment);

module.exports = router;