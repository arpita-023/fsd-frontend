window.global = window;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./components/UserContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Choice from "./components/Choice.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Sponsor from "./Pages/Sponsor.jsx";
import Adopt from "./Pages/Adopt.jsx";
import Volunteer from "./Pages/Volunteer.jsx";
import PetUpload from "./components/PetUpload.jsx";
import Shop1 from "./components/Shop1.jsx";
import AddProducts from "./components/AddProducts.jsx";
import Admin_Choice from "./Pages/Admin_Choice.jsx";
import Donor from "./components/Donor.jsx";
import Basket from "./Pages/Basket.jsx";
import Shelter from "./Pages/Shelter.jsx"
import ShelterForm from "./Pages/ShelterForm.jsx";
import ShelterDetails from './components/ShelterDetails.jsx'
const App = () => {
  return (
    <UserProvider>
      <Router>
        <div>
          {" "}
          {/* Wrap your Routes in a div or React.Fragment */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/choice" element={<Choice />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/petupload" element={<PetUpload />} />
            <Route path="/shop" element={<Shop1 />} />
            <Route path="/addproducts" element={<AddProducts />} />
            <Route path="/adminchoice" element={<Admin_Choice />} />
            <Route path="/donordetails" element={<Donor />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/shelter" element={<Shelter />} />
            <Route path="/shelterform" element={<ShelterForm />} />
            <Route path="/shelterdetails" element={<ShelterDetails />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
