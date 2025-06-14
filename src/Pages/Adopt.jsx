import React, { useState, useEffect } from "react";
import axios from "../axios";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Adopt = () => {
  const [pets, setPets] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get("/api/dogs"); // Replace with your API endpoint
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  const images = pets.map((pet) => pet.imageURL);

  const filteredPets = pets.filter((pet) => {
    if (filter === "All") return true;
    if (filter === "Dogs" && pet.type === "Dog") return true;
    if (filter === "Cats" && pet.type === "Cat") return true;
    if (filter === "Disabled" && pet.disability && pet.disability !== "None") return true;
    if (filter === "Foreign Breeds" && pet.isForeignBreed) return true;
    if (filter === "Others" && !["Dog", "Cat"].includes(pet.type)) return true;
    return false;
  });

  return (
    <div className="Adopt">
      <h2>Available Pets for Adoption</h2>
      <nav>
        <a href="#" onClick={() => setFilter("All")}>
          All
        </a>
        <a href="#" onClick={() => setFilter("Disabled")}>
          Disabled
        </a>
        <a href="#" onClick={() => setFilter("Cats")}>
          Cats
        </a>
        <a href="#" onClick={() => setFilter("Dogs")}>
          Dogs
        </a>
        <a href="#" onClick={() => setFilter("Foreign Breeds")}>
          Foreign Breeds
        </a>
        <a href="#" onClick={() => setFilter("Others")}>
          Others
        </a>
      </nav>
      <button type="submit" className="basket-button">
        Basket
      </button>
      <div className="adopt-container">
        {filteredPets.map((pet, index) => (
          <div className="pet-card" key={pet._id}>
            <img
              src={pet.imageURL}
              alt={pet.name}
              className="pet-image"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
              style={{ cursor: "pointer" }}
            />
            <p>Name: {pet.name}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <p>Color: {pet.color}</p>
            <p>Disability: {pet.disability}</p>
            <p>Gender: {pet.gender}</p>
            <p>Type: {pet.type}</p>
            <button>Adopt</button>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Adopt;
