// src/utils/constants.js
export const petImages = {
    cat1: "https://i.imgur.com/JSjyNzD.jpg",
    cat2: "https://i.imgur.com/4xBfNV1.jpg",
    dog1: "https://i.imgur.com/vzrVDVz.jpg",
    dog2: "https://i.imgur.com/dIrRT21.jpg"
  };
  
  export const pets = [
    {
      id: 1,
      name: "Luna",
      type: "Cat",
      age: "2 years",
      mood: "😺",
      image: petImages.cat1,
      happiness: 90,
      energy: 75,
      activities: ["Playing", "Napping", "Eating"],
      treats: 5,
      toys: ["🐟", "🧶", "🐁"]
    },
    {
      id: 2,
      name: "Max",
      type: "Dog",
      age: "3 years",
      mood: "🐶",
      image: petImages.dog1,
      happiness: 95,
      energy: 85,
      activities: ["Walking", "Fetching", "Training"],
      treats: 3,
      toys: ["🦴", "🎾", "🧸"]
    }
  ];