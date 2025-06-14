import React, { useState } from "react";
import axios from "../axios"; // Adjust the path as needed

function AddDonor() {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");
  // const [payment, setPayment] = useState("");

  const adddonor = async (e) => {
    e.preventDefault();

    try {
      const donorData = {
        fullName,
        email,
        amount: Number(amount),
        message,
      };

      const response = await axios.post("/donor/add", donorData);
      console.log(response.data);
      alert(response.data.message);
      setfullName("");
      setEmail("");
      setAmount(0);
      setMessage("");
      // setPayment("");
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
    <div className="container">
      <div className="form-box">
        <h2>Donor Registration</h2>
        <form onSubmit={adddonor}>
          {/* Input fields for sponsor information */}
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Amount ($):
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <label>
            Message (Optional):
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          {/* <label>
            Payment Method:
            <select
              name="paymentMethod"
              value={payment}
              onChange={(e) => setTitle(e.target.value)}
            >
              <option value="CreditCard">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="G-Pay">G-Pay</option>
            </select>
          </label> */}
          <button type="submit">DONATE</button>
        </form>
      </div>
    </div>
  );
}

export default AddDonor;
