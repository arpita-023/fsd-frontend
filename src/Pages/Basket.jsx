// Basket.jsx

import React from "react";

const Basket = ({ adoptedPets }) => {
  return (
    <div className="Basket">
      <h2>Adopted Pets Basket</h2>
      <div className="basket-container">
        {adoptedPets &&
          adoptedPets.map((pet) => (
            <div className="basket-item" key={pet._id}>
              <img src={pet.imageURL} alt={pet.name} className="basket-image" />
              <p>Name: {pet.name}</p>
              <p>Breed: {pet.breed}</p>
              <p>Age: {pet.age}</p>
              <p>Color: {pet.color}</p>
              <p>Disability: {pet.disability}</p>
              <p>Gender: {pet.gender}</p>
              <p>Type: {pet.type}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Basket;
