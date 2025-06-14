import React, { useState } from "react";
import axios from "../axios"; // Adjust the path as needed

function AddProducts() {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const productData = {
        title,
        imageURL,
        price: Number(price),
        rating: Number(rating),
      };

      const response = await axios.post("/products/add", productData);
      console.log(response.data);
      alert(response.data.message);
      setTitle("");
      setImageURL("");
      setPrice(0);
      setRating(0);
    } catch (error) {
      console.error(
        "Error adding product:",
        error.response?.data || error.message
      );
      alert(
        `Error adding product: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <div>
      <div className="products-container">
        <h3>ADD PRODUCT</h3>
        <div className="product-input">
          <form onSubmit={addProduct}>
            <p>Title:</p>
            <input
              type="text"
              placeholder="Product Name"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <p>ImageURL:</p>
            <input
              type="text"
              placeholder="imageURL"
              onChange={(e) => setImageURL(e.target.value)}
              value={imageURL}
            />
            <p>Price:</p>
            <input
              type="number"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <p>Rating:</p>
            <input
              type="number"
              placeholder="Rating"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            />
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
