import React from "react";
import Header from "./Header";
const Choice = () => {
  return (
    <div>
      <div className="Header">
        <h1>Choose one of the following deeds </h1>
      </div>
      <div className="choice-bg"></div>
      <div className="ch">
        <div className="template">
          <div className="adopt">
            <h1>ADOPT</h1>
            <p>"Find your furry companion and give them a forever home."</p>
            <a href="/adopt">ADOPT</a>
          </div>
          <div className="donate">
            <h1>DONATE</h1>
            <p>
              "Make a difference without bringing them home. Sponsor an animal
              today."
            </p>
            <a href="/sponsor">DONATE</a>
          </div>
          <div className="volunteer">
            <h1>VOLUNTEER</h1>
            <p>
              "Volunteer your time and skills to help our furry friends thrive."
            </p>
            <a href="/volunteer">VOLUNTEER</a>
          </div>
          <div className="shelter">
            <h1>SHELTER</h1>
            <p>
              "Help us provide a second chance for dogs by offering shelter."
            </p>
            <a href="/shelter">SHELTER</a>
          </div>
          <p className="choice-para-1">
            If any queries Contact our team Ph.no: 7305154620
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choice;
