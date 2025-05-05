// src/components/services/Services.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../contexts/BookingContext';
import './Services.css';
import walkingImage from '../../assets/images/walking.jpg';
import vetCareImage from '../../assets/images/vetcare.jpg';
import trainingImage from '../../assets/images/training.jpg';
function Services() {
  const navigate = useNavigate();
  const { dispatch } = useBooking();

  const services = [
    {
      id: 1,
      name: "Pet Grooming",
      description: "Professional grooming services for your pets",
      price: "From $30",
      basePrice: 30,
      duration: "1-2 hours",
      image: "https://images.unsplash.com/photo-1527526029430-319f10814151",
      features: ["Bath & Brush", "Nail Trimming", "Ear Cleaning", "Style Cut"],
      availability: "Monday - Saturday",
      category: "Grooming"
    },
    {
      id: 2,
      name: "Dog Walking",
      description: "Regular exercise and outdoor activities",
      price: "From $20",
      basePrice: 20,
      duration: "30-60 mins",
      image: walkingImage,
      features: ["Individual Walks", "Group Walks", "Park Visits", "Exercise Training"],
      availability: "Daily",
      category: "Exercise"
    },
    {
      id: 3,
      name: "Veterinary Care",
      description: "Complete health check and medical care",
      price: "From $50",
      basePrice: 50,
      duration: "30-45 mins",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
      features: ["Health Check-up", "Vaccinations", "Medical Treatment", "Diet Consultation"],
      availability: "Monday - Friday",
      category: "Medical"
    },
    {
      id: 4,
      name: "Pet Training",
      description: "Professional behavior training sessions",
      price: "From $40",
      basePrice: 40,
      duration: "1 hour",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
      features: ["Basic Commands", "Behavior Correction", "Socialization", "Advanced Training"],
      availability: "Monday - Saturday",
      category: "Training"
    },
    {
      id: 5,
      name: "Pet Sitting",
      description: "In-home pet care while you're away",
      price: "From $25",
      basePrice: 25,
      duration: "Flexible",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9",
      features: ["Feeding", "Playing", "Walking", "Medication Administration"],
      availability: "24/7",
      category: "Care"
    },
    {
      id: 6,
      name: "Pet Boarding",
      description: "Comfortable overnight stay for pets",
      price: "From $45/night",
      basePrice: 45,
      duration: "24 hours+",
      image: trainingImage,
      features: ["Cozy Accommodation", "Regular Meals", "Playtime", "24/7 Supervision"],
      availability: "24/7",
      category: "Boarding"
    },
    {
      id: 7,
      name: "Pet Dental Care",
      description: "Complete dental hygiene services",
      price: "From $60",
      basePrice: 60,
      duration: "45-60 mins",
      image: vetCareImage,
      features: ["Teeth Cleaning", "Dental Check-up", "Breath Freshening", "Oral Health Tips"],
      availability: "Monday - Friday",
      category: "Medical"
    },
    {
      id: 8,
      name: "Pet Photography",
      description: "Professional pet photo sessions",
      price: "From $80",
      basePrice: 80,
      duration: "1-2 hours",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
      features: ["Studio Photos", "Outdoor Shoots", "Digital Copies", "Photo Editing"],
      availability: "By Appointment",
      category: "Special"
    },
    {
      id: 9,
      name: "Pet Transportation",
      description: "Safe and comfortable pet transport",
      price: "From $35",
      basePrice: 35,
      duration: "As needed",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55",
      features: ["Vet Visits", "Airport Transfers", "Climate Controlled", "Safe Carriers"],
      availability: "24/7",
      category: "Transport"
    }
  ];

  const handleBooking = (service) => {
    dispatch({ 
      type: 'SELECT_SERVICE', 
      payload: {
        ...service,
        formattedPrice: service.price,
        actualPrice: service.basePrice,
        serviceId: service.id,
        bookingTime: new Date().toISOString()
      }
    });
    navigate('/services/book');
  };

  return (
    <div className="services-container">
      <header className="services-header">
        <h1>Our Pet Services</h1>
        <p>Professional care for your beloved pets</p>
      </header>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-image">
              <img 
                src={service.image} 
                alt={service.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x300?text=Service+Image';
                }}
              />
            </div>
            <div className="service-info">
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-price">{service.price}</p>
              <p className="service-duration">⏱ {service.duration}</p>
              <p className="service-availability">📅 {service.availability}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <button 
                className="book-button"
                onClick={() => handleBooking(service)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;