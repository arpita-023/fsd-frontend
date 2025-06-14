import React, { useState, useEffect } from "react";
import axios from "../axios";

const Shelter = () => {
  const [shelters, setShelter] = useState([]);

  useEffect(() => {
    const fetchShelter = async () => {
      try {
        const response = await axios.get("/api/shelters"); // Replace with your API endpoint
        setShelter(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchShelter();
  }, []);

  return (
    <div className="Shop">
      <h2>Shelter Animal Details</h2>
      <div className="shop-container">
        {shelters.map((shelter) => (
          <div className="product-card" key={shelter._id}>
            <p>Name: {shelter.name}</p>
            <p>Email: {shelter.email}</p>
            <p>Pet Name: {shelter.petName}</p>
            <p>Pet Type:{shelter.petType}</p>
            <p>Check-In-Date: {shelter.checkInDate}</p>
            <p>Check-Out-Date: {shelter.checkOutDate}</p>
            <p>Medication: {shelter.medication}</p>
            <p>Allergies:{shelter.allergies}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shelter;
