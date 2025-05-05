// src/components/social/CommentSection.js
import React, { useState } from 'react';
import './CommentSection.css';

const CommentSection = ({ postId, comments }) => {
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      // Add comment logic here
      setNewComment('');
    }
  };

  return (
    <div className="comment-section">
      <button 
        className="toggle-comments"
        onClick={() => setShowComments(!showComments)}
      >
        {showComments ? 'Hide Comments' : 'Show Comments'} ({comments.length})
      </button>
      
      {showComments && (
        <>
          <div className="comments-list">
            {comments.map((comment) => (
              <div key={comment.id} className="comment">
                <img 
                  src={comment.user.avatar} 
                  alt={comment.user.name} 
                  className="comment-avatar"
                />
                <div className="comment-content">
                  <div className="comment-header">
                    <span className="comment-author">{comment.user.name}</span>
                    <span className="comment-time">{comment.timestamp}</span>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                  <div className="comment-actions">
                    <button>Like</button>
                    <button>Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmitComment} className="comment-form">
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit">Post</button>
          </form>
        </>
      )}
    </div>
  );
};

export default CommentSection;