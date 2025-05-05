// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { 
    createPost, 
    getPosts, 
    getPostById,
    updatePost,
    deletePost,
    likePost,
    addComment 
} = require('../controllers/postController');

router.post('/', auth, createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.post('/:id/like', auth, likePost);
router.post('/:id/comments', auth, addComment);

module.exports = router;