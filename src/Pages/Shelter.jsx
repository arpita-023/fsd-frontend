import React from "react";

const Shelter = () => {
  return (
    <div className="shelter-container">
      <div className="overlay">
        <h1 className="shelter-title">
          Welcome to Our Shelter
          <br />
          Providing a Safe Haven for Your Pets
        </h1>
      </div>

      <div className="sections-container">
        <section className="shelter-section">
          <h2 className="shelter-heading">About Our Shelter</h2>
          <p>
            At our shelter, we understand that sometimes pet owners need a safe
            place for their furry friends when they're away. We provide a
            nurturing environment where pets can stay and receive the care they
            need until their owners return.
          </p>
        </section>

        <section className="shelter-section">
          <h2 className="shelter-heading">Why Choose Our Shelter?</h2>
          <ul className="shelter-list">
            <li>
              <strong>Caring Staff:</strong> Our trained staff members are
              dedicated to ensuring the well-being of all pets under our care.
            </li>
            <li>
              <strong>Safe Environment:</strong> Our facility is equipped with
              secure enclosures and round-the-clock supervision to ensure the
              safety of all our guests.
            </li>
          </ul>
        </section>
      </div>

      <div className="sections-container">
        <section className="shelter-section">
          <h2 className="shelter-heading">Services Offered</h2>
          <ul className="shelter-list">
            <li>
              <strong>Boarding:</strong> Overnight and extended stays for dogs
              and cats of all breeds and sizes.
            </li>
            <li>
              <strong>Feeding and Medication:</strong> Customized feeding
              schedules and administration of medications as per your
              instructions.
            </li>
          </ul>
        </section>

        <section className="shelter-section">
          <h2 className="shelter-heading">Requirements for Boarding</h2>
          <ul className="shelter-list">
            <li>
              <strong>Vaccination Records:</strong> Up-to-date vaccination
              records required for all pets staying at our shelter.
            </li>
            <li>
              <strong>Reservations:</strong> Advanced reservations are
              recommended to ensure availability.
            </li>
          </ul>
        </section>
      </div>

      <div className="sections-container">
        <section className="shelter-section">
          <h2 className="shelter-heading">Facility Amenities</h2>
          <ul className="shelter-list">
            <li>
              <strong>Comfortable Accommodations:</strong> Cozy beds and
              spacious enclosures for pets to relax in.
            </li>
            <li>
              <strong>Outdoor Play Area:</strong> Secure outdoor area for pets
              to exercise and play.
            </li>
          </ul>
        </section>

        <section className="shelter-section">
          <h2 className="shelter-heading">Contact Us</h2>
          <p>
            If you have any questions or would like to schedule a visit to our
            shelter, please don't hesitate to contact us:
          </p>
          <ul className="shelter-list">
            <li>
              <strong>Phone:</strong> [Insert Phone Number]
            </li>
            <li>
              <strong>Email:</strong> [Insert Email Address]
            </li>
            <li>
              <strong>Address:</strong> [Insert Address]
            </li>
          </ul>
        </section>
      </div>

      <div className="shelter-form-link">
        <h2 className="shelter-heading2">Ready to Book a Stay?</h2>
        <p>Contact us today to reserve a spot for your pet at our shelter!</p>
        <a href="/shelterform" className="shelter-button">
          Reserve Now!
        </a>
      </div>
    </div>
  );
};

export default Shelter;
