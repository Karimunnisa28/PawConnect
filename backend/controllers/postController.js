// controllers/postController.js
const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
    try {
        const post = await Post.create({
            ...req.body,
            author: req.userId
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('author', 'username profile')
            .sort('-createdAt');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
            .populate('author', 'username profile');
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findOneAndUpdate(
            { _id: req.params.id, author: req.userId },
            req.body,
            { new: true }
        );
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findOneAndDelete({
            _id: req.params.id,
            author: req.userId
        });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        const likeIndex = post.likes.indexOf(req.userId);
        if (likeIndex === -1) {
            post.likes.push(req.userId);
        } else {
            post.likes.splice(likeIndex, 1);
        }

        await post.save();
        res.json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.addComment = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        post.comments.push({
            user: req.userId,
            text: req.body.text
        });

        await post.save();
        res.json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};