// src/components/business/Appointments.js
import React, { useState } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      petName: "Max",
      ownerName: "John Doe",
      service: "Grooming",
      date: "2024-01-20",
      time: "10:00 AM",
      status: "Confirmed"
    },
    // Add more appointments...
    
    {
      id: 2,
      name: "Luna",
      type: "Cat",
      breed: "Persian",
      age: "1.5 years",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
      status: "Available",
      personality: ["Gentle", "Quiet", "Affectionate"],
      description: "Luna is a beautiful Persian cat who enjoys cuddles and peaceful naps."
    },
    {
      id: 3,
      name: "Rocky",
      type: "Dog",
      breed: "German Shepherd",
      age: "3 years",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95",
      status: "Available",
      personality: ["Protective", "Intelligent", "Loyal"],
      description: "Rocky is a well-trained German Shepherd with a heart of gold."
    },
    {
      id: 4,
      name: "Milo",
      type: "Cat",
      breed: "Siamese",
      age: "1 year",
      image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8",
      status: "Reserved",
      personality: ["Playful", "Vocal", "Social"],
      description: "Milo is a chatty Siamese who loves to be the center of attention."
    },
    {
      id: 5,
      name: "Bella",
      type: "Dog",
      breed: "Labrador",
      age: "4 years",
      image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3",
      status: "Available",
      personality: ["Sweet", "Family-friendly", "Patient"],
      description: "Bella is a gentle Lab who's great with children and other pets."
    },
    {
      id: 6,
      name: "Charlie",
      type: "Bird",
      breed: "African Grey Parrot",
      age: "2 years",
      image: "https://images.unsplash.com/photo-1544181093-c712fb401bdc",
      status: "Available",
      personality: ["Smart", "Talkative", "Curious"],
      description: "Charlie is an intelligent parrot who can already speak several words!"
    },
    {
      id: 7,
      name: "Sophie",
      type: "Dog",
      breed: "French Bulldog",
      age: "1 year",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
      status: "Available",
      personality: ["Energetic", "Loving", "Playful"],
      description: "Sophie is a spunky Frenchie who brings joy to everyone she meets."
    },
    {
      id: 8,
      name: "Oliver",
      type: "Cat",
      breed: "Maine Coon",
      age: "3 years",
      image: "https://images.unsplash.com/photo-1615789591457-74a63395c990",
      status: "Available",
      personality: ["Gentle Giant", "Calm", "Friendly"],
      description: "Oliver is a majestic Maine Coon with a peaceful personality."
    },
    {
      id: 9,
      name: "Daisy",
      type: "Dog",
      breed: "Beagle",
      age: "2 years",
      image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530",
      status: "Available",
      personality: ["Curious", "Friendly", "Active"],
      description: "Daisy is an adventurous Beagle who loves to explore and make friends."
    },
    {
      id: 10,
      name: "Leo",
      type: "Cat",
      breed: "Bengal",
      age: "1.5 years",
      image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec",
      status: "Available",
      personality: ["Energetic", "Smart", "Athletic"],
      description: "Leo is a stunning Bengal cat with lots of energy and personality."
    },
    {
      id: 11,
      name: "Ruby",
      type: "Dog",
      breed: "Australian Shepherd",
      age: "1 year",
      image: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a",
      status: "Available",
      personality: ["Intelligent", "Athletic", "Herding"],
      description: "Ruby is a brilliant Aussie who excels at agility training!"
    },
    {
      id: 12,
      name: "Simba",
      type: "Cat",
      breed: "Orange Tabby",
      age: "3 years",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
      status: "Available",
      personality: ["Regal", "Confident", "Friendly"],
      description: "Simba lives up to his name as the king of any room he enters."
    },
    {
      id: 13,
      name: "Kiwi",
      type: "Bird",
      breed: "Green Parakeet",
      age: "1 year",
      image: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe",
      status: "Available",
      personality: ["Cheerful", "Musical", "Social"],
      description: "Kiwi loves to sing and interact with everyone!"
    },
    {
      id: 14,
      name: "Thor",
      type: "Dog",
      breed: "Siberian Husky",
      age: "2 years",
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea",
      status: "Available",
      personality: ["Energetic", "Talkative", "Adventure-loving"],
      description: "Thor is a majestic husky who loves winter and long runs."
    },
    {
      id: 15,
      name: "Misty",
      type: "Cat",
      breed: "Russian Blue",
      age: "4 years",
      image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803",
      status: "Available",
      personality: ["Elegant", "Quiet", "Affectionate"],
      description: "Misty is a sophisticated lady who loves peaceful afternoons."
    },
    {
      id: 16,
      name: "Rio",
      type: "Bird",
      breed: "Blue Macaw",
      age: "3 years",
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3",
      status: "Available",
      personality: ["Colorful", "Entertaining", "Smart"],
      description: "Rio brings tropical charm and intelligence to any home!"
    },
    {
      id: 17,
      name: "Bear",
      type: "Dog",
      breed: "Newfoundland",
      age: "2 years",
      image: "https://images.unsplash.com/photo-1575425186775-b8de9a427e67",
      status: "Available",
      personality: ["Gentle Giant", "Water-loving", "Patient"],
      description: "Bear is a huge softie who loves swimming and children."
    },
    {
      id: 18,
      name: "Shadow",
      type: "Cat",
      breed: "Black Bombay",
      age: "1 year",
      image: "https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6",
      status: "Available",
      personality: ["Mysterious", "Playful", "Loving"],
      description: "Shadow is a sleek black cat with a heart of gold."
    },
    {
      id: 19,
      name: "Coco",
      type: "Dog",
      breed: "Chocolate Lab",
      age: "5 years",
      image: "https://images.unsplash.com/photo-1597843797221-e34b4a320b97",
      status: "Available",
      personality: ["Mature", "Trained", "Family-oriented"],
      description: "Coco is an experienced family dog who loves children."
    }
  ]);

  return (
    <div className="appointments-container">
      <h2>Appointments</h2>
      <div className="appointments-list">
        {appointments.map(appointment => (
          <div key={appointment.id} className="appointment-card">
            <div className="appointment-header">
              <h3>{appointment.petName}</h3>
              <span className={`status ${appointment.status.toLowerCase()}`}>
                {appointment.status}
              </span>
            </div>
            <div className="appointment-details">
              <p><strong>Owner:</strong> {appointment.ownerName}</p>
              <p><strong>Service:</strong> {appointment.service}</p>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
            </div>
            <div className="appointment-actions">
              <button>Edit</button>
              <button>Cancel</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;