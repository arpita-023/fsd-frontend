import React from "react";

const Volunteer = () => {
  return (
    <div className="volunteer-container">
      <div className="overlay">
        <h1 className="volunteer-title">
          Join the Fuzzy Paws Volunteer Program
          <br />
          Make a Lasting Impact in the Lives of Pets and People
        </h1>
      </div>

      <div className="sections-container">
        <section className="volunteer-section">
          <h2 className="volunteer-heading">
            Make a Difference with Fuzzy Paws
          </h2>
          <p>
            Join us in promoting responsible pet ownership, advocating for
            animal welfare, and finding loving homes for pets in need. Connect
            with passionate, like-minded individuals and make a meaningful
            impact!
          </p>
        </section>

        <section className="volunteer-section">
          <h2 className="volunteer-heading">Why Volunteer with Us?</h2>
          <ul className="volunteer-list">
            <li>
              <strong>Mission:</strong> Help animals find loving homes and
              promote their welfare.
            </li>
            <li>
              <strong>Community:</strong> Connect with fellow animal lovers and
              make a difference together.
            </li>
          </ul>
        </section>
      </div>


      <div className="sections-container">
        <section className="volunteer-section">
          <h2 className="volunteer-heading">Requirements</h2>
          <ul className="volunteer-list">
            <li>
              <strong>Age:</strong> 18+ to volunteer independently. Younger
              volunteers can join in supervised roles.
            </li>
            <li>
              <strong>Commitment:</strong> [Specific time commitment] per
              week/month. Flexibility for occasional evening or weekend events
              is appreciated.
            </li>
          </ul>
        </section>

        <section className="volunteer-section">
          <h2 className="volunteer-heading">Skills and Training</h2>
          <ul className="volunteer-list">
            <li>
              <strong>No Experience Needed:</strong> Just a love for animals and
              good communication skills. Training provided.
            </li>
            <li>
              <strong>Orientation:</strong> Learn our policies, safety
              procedures, and volunteer roles.
            </li>
            <li>
              <strong>Ongoing Training:</strong> Opportunities to learn animal
              handling, adoption procedures, and customer service.
            </li>
          </ul>
        </section>
      </div>

      <div className="sections-container">
        <section className="volunteer-section">
          <h2 className="volunteer-heading">Personal Traits</h2>
          <ul className="volunteer-list">
            <li>
              <strong>Values:</strong> Reliability, responsibility, positive
              attitude, and respect for all.
            </li>
            <li>
              <strong>Physical Requirements:</strong> Some roles may involve
              bending, lifting, or standing. We accommodate mobility
              limitations.
            </li>
          </ul>
        </section>

        <section className="volunteer-section">
          <h2 className="volunteer-heading">Volunteer Expectations</h2>
          <ul className="volunteer-list">
            <li>
              <strong>Background Checks:</strong> Required for certain roles.
            </li>
            <li>
              <strong>Code of Conduct:</strong> Treat all animals with kindness,
              maintain confidentiality, and represent Fuzzy Paws positively.
            </li>
            <li>
              <strong>Agreement:</strong> Complete a volunteer agreement
              acknowledging our policies.
            </li>
            <li>
              <strong>Communication:</strong> Keep open communication with our
              volunteer coordinator about availability and concerns.
            </li>
            <li>
              <strong>Safety:</strong> Follow all safety protocols and
              prioritize the well-being of everyone involved.
            </li>
          </ul>
        </section>
      </div>

      <div className="sections-container">
        <section className="volunteer-section">
          <h2 className="volunteer-heading">Inclusivity</h2>
          <p>
            We embrace diversity and inclusivity, respecting all perspectives
            and backgrounds.
          </p>
        </section>

        <section className="volunteer-section">
          <h2 className="volunteer-heading">Training and Orientation</h2>
          <p>
            All volunteers are required to complete our comprehensive training
            and orientation program, which covers organization policies, safety
            procedures, and an overview of volunteer roles and responsibilities.
            Ongoing training opportunities are also available to learn about
            animal handling, adoption procedures, and customer service skills.
          </p>
        </section>
      </div>

      <div className="vol-form-link">
        <h2 className="volunteer-heading2">Ready to Make a Difference?</h2>
        <p>
          Join the Fuzzy Paws Volunteer Program today and start making a
          positive impact in the lives of pets and people!
        </p>
        <a href="#" className="volunteer-button">
          Volunteer Now!
        </a>
      </div>
    </div>
  );
};

export default Volunteer;
