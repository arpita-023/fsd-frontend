import React, { useState } from "react";
import axios from "../axios";
import { Container, Form, FormGroup, Button } from "./styles"; // Adjust the path as needed

const PetUpload = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [disability, setDisability] = useState("");
  const [color, setColor] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/petupload/add", {
        name,
        breed,
        imageURL,
        disability,
        color,
        age,
        gender,
        type,
      });
      alert("Pet added successfully");

      // Reset form fields
      setName("");
      setBreed("");
      setImageURL("");
      setDisability("");
      setColor("");
      setAge(0);
      setGender("");
      setType("");
    } catch (error) {
      console.error(
        "Error during pet upload:",
        error.response?.data || error.message
      );
      alert(`Pet upload failed: ${error.response?.data || error.message}`);
    }
  };

  return (
    <Container>
      <h3>ADD PET</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </FormGroup>
        <FormGroup>
          <label>Breed:</label>
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            placeholder="Breed"
            required
          />
        </FormGroup>
        <FormGroup>
          <label>Image URL:</label>
          <input
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Image URL"
            required
          />
        </FormGroup>
        <FormGroup>
          <label>Disability:</label>
          <input
            type="text"
            value={disability}
            onChange={(e) => setDisability(e.target.value)}
            placeholder="Disability"
          />
        </FormGroup>
        <FormGroup>
          <label>Color:</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Color"
            required
          />
        </FormGroup>
        <FormGroup>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            required
          />
        </FormGroup>
        <FormGroup>
          <label>Gender:</label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Gender"
            required
          />
        </FormGroup>
        <FormGroup>
          <label>Type:</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Type"
            required
          />
        </FormGroup>
        <Button type="submit">Upload Pet</Button>
      </Form>
    </Container>
  );
};

export default PetUpload;
