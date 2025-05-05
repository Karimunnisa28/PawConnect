// src/components/social/SocialFeed.js
import React, { useState, useRef } from 'react';
import './SocialFeed.css';

function SocialFeed() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // Avatar image URLs
  const avatarImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    "https://images.unsplash.com/photo-1544724107-6d5c4caaff30",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  ];

  // Pet/Post image URLs
  const petImages = [
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
    "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec",
    "https://images.unsplash.com/photo-1583511655826-05700442982f",
    "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2",
    "https://images.unsplash.com/photo-1511044568932-338cba0ad803",
    "https://images.unsplash.com/photo-1574158622682-e40e69881006",
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    "https://images.unsplash.com/photo-1596854273338-cbf078ec7071",
    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8",
    "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8",
    "https://images.unsplash.com/photo-1574158622682-e40e69881006"
  ];

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "Sarah Parker",
        avatar: avatarImages[0]
      },
      content: "Had an amazing day at the park with Max! 🐕",
      image: petImages[0],
      likes: 124,
      comments: 23,
      timestamp: "2 hours ago",
      isLiked: false
    },
    {
      id: 2,
      user: {
        name: "John Miller",
        avatar: avatarImages[1]
      },
      content: "Luna's first grooming session went perfectly! ✨",
      image: petImages[1],
      likes: 89,
      comments: 15,
      timestamp: "3 hours ago",
      isLiked: false
    },
    {
      id: 3,
      user: {
        name: "Emma Wilson",
        avatar: avatarImages[2]
      },
      content: "Meet our new family member, Charlie! 🐱",
      image: petImages[2],
      likes: 245,
      comments: 42,
      timestamp: "5 hours ago",
      isLiked: false
    },
    {
      id: 4,
      user: {
        name: "Michael Brown",
        avatar: avatarImages[3]
      },
      content: "Morning run with Rocky! 🏃‍♂️",
      image: petImages[3],
      likes: 156,
      comments: 18,
      timestamp: "6 hours ago",
      isLiked: false
    },
    {
      id: 5,
      user: {
        name: "Lisa Anderson",
        avatar: avatarImages[4]
      },
      content: "Bella's first birthday party! 🎉🎂",
      image: petImages[4],
      likes: 312,
      comments: 45,
      timestamp: "8 hours ago",
      isLiked: false
    },
    {
      id: 6,
      user: {
        name: "David Clark",
        avatar: avatarImages[5]
      },
      content: "Sunday funday with my best buddy! 🐾",
      image: petImages[5],
      likes: 178,
      comments: 27,
      timestamp: "10 hours ago",
      isLiked: false
    },
    {
      id: 7,
      user: {
        name: "Sophie Taylor",
        avatar: avatarImages[6]
      },
      content: "Successful training day! 🎓",
      image: petImages[6],
      likes: 201,
      comments: 31,
      timestamp: "12 hours ago",
      isLiked: false
    },
    {
      id: 8,
      user: {
        name: "James Wilson",
        avatar: avatarImages[7]
      },
      content: "Beach day with Oliver! 🏖️",
      image: petImages[7],
      likes: 267,
      comments: 34,
      timestamp: "1 day ago",
      isLiked: false
    },
    
      
    {
      id: 10,
      user: {
        name: "Alex Johnson",
        avatar: avatarImages[9]
      },
      content: "Leo's first snow experience! ❄️",
      image: petImages[9],
      likes: 289,
      comments: 37,
      timestamp: "1 day ago",
      isLiked: false
    },
    {
      id: 11,
      user: {
        name: "Isabella Martinez",
        avatar: avatarImages[0]
      },
      content: "Ruby showing off her agility skills! 🏃‍♀️",
      image: petImages[10],
      likes: 198,
      comments: 25,
      timestamp: "2 days ago",
      isLiked: false
    },
    {
      id: 12,
      user: {
        name: "William Turner",
        avatar: avatarImages[1]
      },
      content: "Simba's afternoon nap 😴",
      image: petImages[11],
      likes: 167,
      comments: 21,
      timestamp: "2 days ago",
      isLiked: false
    },
    {
      id: 13,
      user: {
        name: "Olivia White",
        avatar: avatarImages[2]
      },
      content: "Kiwi's singing session! 🎵",
      image: petImages[12],
      likes: 234,
      comments: 29,
      timestamp: "2 days ago",
      isLiked: false
    },
    {
      id: 14,
      user: {
        name: "Daniel Lee",
        avatar: avatarImages[3]
      },
      content: "Thor's winter adventure! ⛄",
      image: petImages[13],
      likes: 276,
      comments: 33,
      timestamp: "3 days ago",
      isLiked: false
    },
    {
      id: 15,
      user: {
        name: "Sophia Rodriguez",
        avatar: avatarImages[4]
      },
      content: "Misty's elegant pose 📸",
      image: petImages[14],
      likes: 189,
      comments: 24,
      timestamp: "3 days ago",
      isLiked: false
    },
    {
      id: 16,
      user: {
        name: "Lucas Thompson",
        avatar: avatarImages[5]
      },
      content: "Rio showing off his colors! 🌈",
      image: petImages[15],
      likes: 223,
      comments: 28,
      timestamp: "3 days ago",
      isLiked: false
    },
    {
      id: 17,
      user: {
        name: "Ava Garcia",
        avatar: avatarImages[6]
      },
      content: "Bear's swimming lesson! 🏊‍♂️",
      image: petImages[16],
      likes: 245,
      comments: 31,
      timestamp: "4 days ago",
      isLiked: false
    },
    {
      id: 18,
      user: {
        name: "Ethan Moore",
        avatar: avatarImages[7]
      },
      content: "Shadow in his mysterious mode 🖤",
      image: petImages[17],
      likes: 178,
      comments: 22,
      timestamp: "4 days ago",
      isLiked: false
    },
    {
      id: 19,
      user: {
        name: "Mia Jackson",
        avatar: avatarImages[8]
      },
      content: "Coco's graduation day! 🎓",
      image: petImages[18],
      likes: 312,
      comments: 45,
      timestamp: "5 days ago",
      isLiked: false
    },
    {
      id: 20,
      user: {
        name: "Noah Wilson",
        avatar: avatarImages[9]
      },
      content: "Ziggy's morning concert! 🎵",
      image: petImages[19],
      likes: 256,
      comments: 32,
      timestamp: "5 days ago",
      isLiked: false
    }
]);

  const suggestedFriends = [
    {
      id: 1,
      name: "Emma Thompson",
      avatar: avatarImages[2],
      mutualFriends: 5
    },
    {
      id: 2,
      name: "Jack Wilson",
      avatar: avatarImages[3],
      mutualFriends: 3
    },
    {
      id: 3,
      name: "Sophia Lee",
      avatar: avatarImages[4],
      mutualFriends: 4
    },
    {
      id: 4,
      name: "Oliver Martinez",
      avatar: avatarImages[5],
      mutualFriends: 7
    },
    {
      id: 5,
      name: "Isabella Chen",
      avatar: avatarImages[6],
      mutualFriends: 2
    },
    {
      id: 6,
      name: "Lucas Anderson",
      avatar: avatarImages[7],
      mutualFriends: 6
    },
    {
      id: 7,
      name: "Mia Rodriguez",
      avatar: avatarImages[8],
      mutualFriends: 8
    },
    {
      id: 8,
      name: "Ethan Parker",
      avatar: avatarImages[9],
      mutualFriends: 4
    },
    {
      id: 9,
      name: "Ava Williams",
      avatar: avatarImages[0],
      mutualFriends: 5
    },
    {
      id: 10,
      name: "Noah Garcia",
      avatar: avatarImages[1],
      mutualFriends: 3
    },
    {
      id: 11,
      name: "Charlotte Kim",
      avatar: avatarImages[2],
      mutualFriends: 6
    },
    {
      id: 12,
      name: "William Taylor",
      avatar: avatarImages[3],
      mutualFriends: 4
    },
    {
      id: 13,
      name: "Sofia Patel",
      avatar: avatarImages[4],
      mutualFriends: 7
    },
    {
      id: 14,
      name: "Benjamin Scott",
      avatar: avatarImages[5],
      mutualFriends: 5
    },
    {
      id: 15,
      name: "Amelia Brown",
      avatar: avatarImages[6],
      mutualFriends: 3
    }

    // Add all 15 suggested friends here
  ];

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.onerror = () => {
          console.error('Error reading file');
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleCreatePost = () => {
    if (newPostContent.trim() || selectedImage) {
      try {
        const newPost = {
          id: Math.max(...posts.map(post => post.id)) + 1,
          user: {
            name: "Current User",
            avatar: avatarImages[0]
          },
          content: newPostContent,
          image: selectedImage,
          likes: 0,
          comments: 0,
          timestamp: "Just now",
          isLiked: false
        };
        setPosts([newPost, ...posts]);
        setNewPostContent('');
        setSelectedImage(null);
        setShowCreatePost(false);
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }
  };

  return (
    <div className="social-feed-container">
      <header className="social-feed-header">
        <h1>Pet Community</h1>
        <button 
          className="create-post-button"
          onClick={() => setShowCreatePost(true)}
        >
          Create Post
        </button>
      </header>

      {showCreatePost && (
        <div className="create-post-modal">
          <div className="modal-content">
            <h2>Create Post</h2>
            <textarea
              placeholder="What's on your mind?"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
            <div className="image-upload">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                style={{ display: 'none' }}
              />
              <button 
                className="upload-button"
                onClick={() => fileInputRef.current.click()}
              >
                Add Photo
              </button>
              {selectedImage && (
                <div className="image-preview">
                  <img src={selectedImage} alt="Preview" />
                  <button 
                    className="remove-image"
                    onClick={() => setSelectedImage(null)}
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
            <div className="modal-actions">
              <button 
                className="cancel-button"
                onClick={() => setShowCreatePost(false)}
              >
                Cancel
              </button>
              <button 
                className="post-button"
                onClick={handleCreatePost}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="feed-content">
        <div className="posts-container">
          {posts.map(post => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <img 
                  src={post.user.avatar} 
                  alt={post.user.name} 
                  className="user-avatar"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/40x40?text=User';
                  }}
                />
                <div className="post-meta">
                  <h3>{post.user.name}</h3>
                  <span className="timestamp">{post.timestamp}</span>
                </div>
              </div>
              <p className="post-content">{post.content}</p>
              {post.image && (
                <div className="post-image">
                  <img 
                    src={post.image} 
                    alt="Post" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=Post+Image';
                    }}
                  />
                </div>
              )}
              <div className="post-actions">
                <button 
                  className={`action-button ${post.isLiked ? 'liked' : ''}`}
                  onClick={() => handleLike(post.id)}
                >
                  <span>{post.isLiked ? '❤️' : '🤍'}</span> {post.likes}
                </button>
                <button className="action-button">
                  <span>💬</span> {post.comments}
                </button>
                <button className="action-button">
                  <span>📤</span> Share
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="social-sidebar">
          <div className="trending-topics">
            <h3>Trending</h3>
            <ul>
              <li>#CutePets</li>
              <li>#PetCare</li>
              <li>#DogLife</li>
              <li>#CatLovers</li>
              <li>#PetPhotography</li>
            </ul>
          </div>
          <div className="suggested-friends">
            <h3>Suggested Friends</h3>
            <div className="friends-list">
              {suggestedFriends.map(friend => (
                <div key={friend.id} className="friend-suggestion">
                  <img 
                    src={friend.avatar} 
                    alt={friend.name} 
                    className="friend-avatar"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/40x40?text=User';
                    }}
                  />
                  <div className="friend-info">
                    <h4>{friend.name}</h4>
                    <p>{friend.mutualFriends} mutual friends</p>
                  </div>
                  <button className="add-friend-btn">Add</button>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default SocialFeed;