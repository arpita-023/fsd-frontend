import React, { useState, useEffect } from "react";
import axios from "../axios";

const Shop1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("/api/products"); // Replace with your API endpoint
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="Shop">
      <h2>Shop</h2>
      <div className="shop-container">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <img
              src={product.imageURL} // Assuming imageURL is the relative path from the public folder
              alt={product.name}
              className="product-image"
            />
            <p>title: {product.title}</p>
            <p>price: {product.price}</p>
            <p>rating: {product.rating}</p>
            <button className="buy-button">Buy Now</button>
            <button className="cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop1;
