import React, { useState } from "react";
import axios from "../axios"; // Adjust the path as needed

function ShelterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [medication, setMedication] = useState("");
  const [allergies, setAllergies] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const shelterData = {
        name,
        email,
        petName,
        petType,
        checkInDate,
        checkOutDate,
        medication,
        allergies,
      };

      const response = await axios.post("/shelter/add", shelterData);
      console.log(response.data);
      alert(response.data.message);
      setName("");
      setEmail("");
      setPetName("");
      setPetType("");
      setCheckInDate("");
      setCheckOutDate("");
      setMedication("");
      setAllergies("");
    } catch (error) {
      console.error(
        "Error booking shelter:",
        error.response?.data || error.message
      );
      alert(
        `Error booking shelter: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Book a Stay</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Your Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Pet's Name:
            <input
              type="text"
              name="petName"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              required
            />
          </label>
          <label>
            Pet's Type (Dog/Cat):
            <input
              type="text"
              name="petType"
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
              required
            />
          </label>
          <label>
            Check-In Date:
            <input
              type="date"
              name="checkInDate"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </label>
          <label>
            Check-Out Date:
            <input
              type="date"
              name="checkOutDate"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </label>
          <label>
            Medication Details (if any):
            <textarea
              name="medication"
              value={medication}
              onChange={(e) => setMedication(e.target.value)}
            />
          </label>
          <label>
            Allergies (if any):
            <textarea
              name="allergies"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ShelterForm;
