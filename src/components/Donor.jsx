import React, { useState, useEffect } from "react";
import axios from "../axios";

const Donor = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("/api/donors"); // Replace with your API endpoint
        setDonors(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="Shop">
      <h2>Donor Details</h2>
      <div className="shop-container">
        {donors.map((donor) => (
          <div className="product-card" key={donor._id}>
            <p>Full Name: {donor.fullName}</p>
            <p>Email: {donor.email}</p>
            <p>Amount: {donor.amount}</p>
            <p>Message:{ donor.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donor;
