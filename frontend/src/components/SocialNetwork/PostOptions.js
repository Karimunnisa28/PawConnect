// src/components/social/PostOptions.js
import React from 'react';
import './PostOptions.css';

const PostOptions = ({ post, onClose }) => {
  const options = [
    { icon: '📌', label: 'Save Post', action: () => console.log('Saving post') },
    { icon: '🔔', label: 'Turn on Notifications', action: () => console.log('Notifications enabled') },
    { icon: '⚠️', label: 'Report Post', action: () => console.log('Reporting post') },
    { icon: '🚫', label: 'Hide Post', action: () => console.log('Hiding post') }
  ];

  return (
    <div className="post-options-menu">
      {options.map((option, index) => (
        <button 
          key={index}
          className="option-button"
          onClick={() => {
            option.action();
            onClose();
          }}
        >
          <span>{option.icon}</span>
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default PostOptions;