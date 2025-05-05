import React from 'react';
import './Dashboard.css';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

// Import category images
import dogImage from '../../assets/images/dog.jpg';
import catImage from '../../assets/images/cat.jpg';
import birdImage from '../../assets/images/bird.jpg';
import fishImage from '../../assets/images/fish.jpg';

// Import service images

import petshampoo from '../../assets/images/petshampoo.jpg';
import petsweater from '../../assets/images/petsweater.jpg';
import summeroutfit from '../../assets/images/summeroutfit.jpg';
import treats from '../../assets/images/treats.jpg';
import partywear from '../../assets/images/partywear.jpg';

function Dashboard() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  const categories = [
    {
      id: 1,
      name: 'Dogs',
      image: dogImage,
      icon: '🐕',
      description: 'Loyal companions'
    },
    {
      id: 2,
      name: 'Cats',
      image: catImage,
      icon: '🐱',
      description: 'Purr-fect friends'
    },
    {
      id: 3,
      name: 'Birds',
      image: birdImage,
      icon: '🦜',
      description: 'Feathered pals'
    },
    {
      id: 4,
      name: 'Fish',
      image: fishImage,
      icon: '🐠',
      description: 'Aquatic buddies'
    }
  ];

  

  return (
    <div className="dashboard-container">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <span className="floating-item">🐾</span>
        <span className="floating-item">🦴</span>
        <span className="floating-item">💖</span>
        <span className="floating-item">🎾</span>
        <span className="floating-item">🐱</span>
        <span className="floating-item">🐶</span>
      </div>

      {/* Combined Header and Hero Section */}
      <div className="header-hero-section">
        <header className="main-header fade-in">
          <div className="header-content">
            <div className="logo wobble-hover">
              <h1>🐾 PawConnect</h1>
            </div>
            <div className="search-bar">
              <div className="pastel-search-container">
                <input 
                  type="search" 
                  placeholder="Find your pet friend..."
                  className="pastel-search"
                />
                <div className="search-decorations">
                  <span className="deco-item">🌸</span>
                  <span className="deco-item">🐾</span>
                  <span className="deco-item">💕</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="hero-content">
          <h1 className="hero-title">
            Find Your Perfect <span className="highlight">Pet Friend</span>
          </h1>
          <p className="hero-subtitle">
            Connect, Share, and Create Memories with Pets
          </p>
          <div className="hero-cta">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Explore Pet Categories</h2>
            <p>Find the perfect companion for your home</p>
          </div>

          <div className="category-container">
            {categories.map((category) => (
              <div key={category.id} className="category-box">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <div className="category-icon">{category.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Pet Products Showcase */}
      <section className="pet-products-showcase">
        <h2 className="section-title">
          <span className="title-emoji">🎁</span>
          Shop Pet Essentials
          <span className="title-emoji">🎁</span>
        </h2>

        {/* Pet Treats Section */}
        <div className="product-category">
          <h3>Pet Treats</h3>
          <div className="product-grid">
            <div className="product-card fade-in">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1582798358481-d199fb7347bb?w=500&auto=format" alt="Dog Treats" />
              </div>
              <div className="product-details">
                <h4>Healthy Dog Treats</h4>
                <p>Natural, grain-free dog treats</p>
                <span className="price">$12.99</span>
                <button 
                  className="shop-btn bounce-hover"
                  onClick={() => handleAddToCart({
                    id: 'treat1',
                    name: 'Healthy Dog Treats',
                    price: 12.99,
                    image: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?w=500&auto=format",
                    description: 'Natural, grain-free dog treats'
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="product-card fade-in">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500&auto=format" alt="Cat Treats" />
              </div>
              <div className="product-details">
                <h4>Cat Dental Treats</h4>
                <p>Dental health cat treats</p>
                <span className="price">$9.99</span>
                <button 
                  className="shop-btn bounce-hover"
                  onClick={() => handleAddToCart({
                    id: 'treat2',
                    name: 'Cat Dental Treats',
                    price: 9.99,
                    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500&auto=format",
                    description: 'Dental health cat treats'
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="product-card fade-in">
              <div className="product-image">
                <img src={treats} alt="Puppy Treats" />
              </div>
              <div className="product-details">
                <h4>Puppy Training Treats</h4>
                <p>Small, soft treats perfect for training</p>
                <span className="price">$8.99</span>
                <button 
                  className="shop-btn bounce-hover"
                  onClick={() => handleAddToCart({
                    id: 'treat3',
                    name: 'Puppy Training Treats',
                    price: 8.99,
                    image: treats,
                    description: 'Small, soft treats perfect for training'
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="product-card fade-in">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&auto=format" alt="Premium Treats" />
              </div>
              <div className="product-details">
                <h4>Premium Fish Treats</h4>
                <p>Omega-rich fish treats for cats</p>
                <span className="price">$14.99</span>
                <button 
                  className="shop-btn bounce-hover"
                  onClick={() => handleAddToCart({
                    id: 'treat4',
                    name: 'Premium Fish Treats',
                    price: 14.99,
                    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&auto=format",
                    description: 'Omega-rich fish treats for cats'
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pet Clothing Section */}
        <div className="product-category">
          <h3>Pet Clothing</h3>
          <div className="product-grid">
            <div className="product-card fade-in">
              <div className="product-image">
                <img src={petsweater} alt="Pet Sweater" />
              </div>
              <div className="product-details">
                <h4>Winter Pet Sweater</h4>
                <p>Warm and cozy winter sweater</p>
                <span className="price">$24.99</span>
                <button 
                  className="shop-btn bounce-hover"
                  onClick={() => handleAddToCart({
                    id: 'clothing1',
                    name: 'Winter Pet Sweater',
                    price: 24.99,
                    image: petsweater,
                    description: 'Warm and cozy winter sweater'
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="product-card fade-in">
              <div className="product-image">
                <img src="https://images.pexels.com/photos/5731861/pexels-photo-5731861.jpeg" alt="Rain Jacket" />
              </div>
              <div className="product-details">
                <h4>Rain Jacket</h4>
                <p>Waterproof pet rain jacket</p>
                <span className="price">$29.99</span>
                <button 
                  className="shop-btn bounce-hover"
                  onClick={() => handleAddToCart({
                    id: 'clothing2',
                    name: 'Rain Jacket',
                    price: 29.99,
                    image: "https://images.pexels.com/photos/5731861/pexels-photo-5731861.jpeg",
                    description: 'Waterproof pet rain jacket'
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="product-card fade-in">
              <div className="product-image">
                <img src={summeroutfit} alt="Summer Outfit" />
              </div>
              <div className="product-details">
                <h4>Summer Cool Outfit</h4>
                <p>Lightweight summer clothing</p>
                <span className="price">$19.99</span>
                <button 
                  className="shop-btn bounce-hover"
                  onClick={() => handleAddToCart({
                    id: 'clothing3',
                    name: 'Summer Cool Outfit',
                    price: 19.99,
                    image: summeroutfit,
                    description: 'Lightweight summer clothing'
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="product-card fade-in">
              <div className="product-image">
                <img src={partywear} alt="Partywear Outfit" />
              </div>
              <div className="product-details">
                <h4>Partywear Outfit</h4>
                <p>Festive clothing</p>
                <span className="price">$19.99</span>
                <button 
                  className="shop-btn bounce-hover"
                  onClick={() => handleAddToCart({
                    id: 'clothing4',
                    name: 'Partywear Outfit',
                    price: 19.99,
                    image: partywear,
                    description: 'Festive clothing'
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pet Care Products Section */}
        <div className="product-category">
          <h3>Pet Care Products</h3>
          <div className="product-grid">
            <div className="product-card fade-in">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&auto=format" alt="Grooming Kit" />
              </div>
              <div className="product-details">
                <h4>Grooming Kit</h4>
                <p>Complete pet grooming kit</p>
                <span className="price">$34.99</span>
                <button 
                  className="shop-btn bounce-hover"
                  onClick={() => handleAddToCart({
                    id: 'care1',
                    name: 'Grooming Kit',
                    price: 34.99,
                    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&auto=format",
                    description: 'Complete pet grooming kit'
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="product-card fade-in">
              <div className="product-image">
                <img src={petshampoo} alt="Pet Shampoo" />
              </div>
              <div className="product-details">
                <h4>Natural Pet Shampoo</h4>
                <p>Gentle, natural pet shampoo</p>
                <span className="price">$14.99</span>
                <button 
                  className="shop-btn bounce-hover"
                  onClick={() => handleAddToCart({
                    id: 'care2',
                    name: 'Natural Pet Shampoo',
                    price: 14.99,
                    image: petshampoo,
                    description: 'Gentle, natural pet shampoo'
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="product-card fade-in">
              <div className="product-image">
                <img src="https://images.pexels.com/photos/6816866/pexels-photo-6816866.jpeg" alt="Dental Kit" />
              </div>
              <div className="product-details">
                <h4>Pet Dental Care Kit</h4>
                <p>Complete dental hygiene set</p>
                <span className="price">$24.99</span>
                <button 
                  className="shop-btn bounce-hover"
                  onClick={() => handleAddToCart({
                    id: 'care3',
                    name: 'Pet Dental Care Kit',
                    price: 24.99,
                    image: "https://images.pexels.com/photos/6816866/pexels-photo-6816866.jpeg",
                    description: 'Complete dental hygiene set'
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="product-card fade-in">
              <div className="product-image">
                <img src="https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg" alt="Nail Trimmer" />
              </div>
              <div className="product-details">
                <h4>Professional Nail Trimmer</h4>
                <p>Safe and easy nail trimming</p>
                <span className="price">$19.99</span>
                <button 
                  className="shop-btn bounce-hover"
                  onClick={() => handleAddToCart({
                    id: 'care4',
                    name: 'Professional Nail Trimmer',
                    price: 19.99,
                    image: "https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg",
                    description: 'Safe and easy nail trimming'
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2 className="rainbow-text">Join Our Pawsome Newsletter!</h2>
          <p>Get treats delivered to your inbox! 🦴</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email..." className="bounce-in" />
            <button className="submit-btn heart-beat">Subscribe 💌</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;