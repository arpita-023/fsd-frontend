import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faHome,
  faStethoscope,
  faPaw,
  faHandsHelping,
  faHeart,
  faUsers,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-img">
        <p>
          Welcome to a world where every wagging tail has a story. Find your
          paw-fect companion and bring home a lifetime of love and adventure.
        </p>
        <a href="/login">Get Started</a>
      </div>
      <div id="Home-About">
        <p>
          Our adoption website is a compassionate platform dedicated to the
          rescue, rehabilitation, and rehoming of pets in need. We provide
          comprehensive care, including medical treatment, grooming, and
          socialization, to ensure every animal is healthy and happy. Our
          rigorous adoption process helps match each pet with a loving forever
          home, offering them a second chance at life and the companionship they
          deserve.
        </p>
        <FontAwesomeIcon icon={faArrowDown} />
      </div>

      <section className="section2">
        <div className="home-card">
          <FontAwesomeIcon icon={faHandsHelping} size="4x" />
          <p>
            Conducted numerous rescues from overcrowded shelters, neglectful
            situations, and abusive environments, providing a second chance at
            life to countless animals in need.
          </p>
        </div>
        <div className="home-card">
          <FontAwesomeIcon icon={faUsers} size="4x" color="#ff4081" />
          <p>
            Actively engaged with the community through outreach programs,
            educational initiatives, and partnerships to promote responsible pet
            ownership and advocate for animal rights.
          </p>
        </div>
        <div className="home-card">
          <FontAwesomeIcon icon={faPaw} size="4x" />
          <p>
            Facilitated thousands of successful adoptions, marking new
            beginnings for pets and their forever families.
          </p>
        </div>
        <div className="home-card">
          <FontAwesomeIcon icon={faHeart} size="4x" color="#ff4081" />
          <p>
            Inspired individuals to open their hearts and homes to pets in need,
            fostering bonds between humans and animals and leaving a lasting
            impact on the community.
          </p>
        </div>
      </section>
      <div className="home-img-2">
        <p>Who Are We and What Do We Do?</p>
      </div>
      <section className="section">
        <div className="Home-card">
          <FontAwesomeIcon icon={faPaw} size="4x" />
          <h3>Pet Care</h3>
          <p>
            Our dedicated team provides comprehensive care for all animals,
            including medical treatment, grooming, and socialization.
          </p>
        </div>
        <div className="Home-card">
          <FontAwesomeIcon
            icon={faHandHoldingHeart}
            size="4x"
            color="#ff4081"
          />
          <h3>Rescue Efforts</h3>
          <p>
            We actively rescue animals from overcrowded shelters, abusive
            situations, and natural disasters, giving them a second chance at
            life.
          </p>
        </div>
        <div className="Home-card">
          <FontAwesomeIcon icon={faStethoscope} size="4x" />
          <div className="Layer">
            <h3>Medical Care</h3>
            <p>
              Every pet receives necessary medical care to ensure their
              well-being and prepare them for adoption.
            </p>
          </div>
        </div>
        <div className="Home-card">
          <FontAwesomeIcon icon={faHome} size="4x" color="#ff4081" />
          <div className="Layer">
            <h3>Rehoming</h3>
            <p>
              We strive to match each pet with the perfect forever home, where
              they can experience the love and companionship they deserve.
            </p>
          </div>
        </div>
      </section>
      <div className="home-content">
        <p>
          At our adoption center, we believe in the transformative power of
          companionship between humans and animals. Every adoption represents a
          new chapter for both the pet and their adopter, fostering a bond built
          on love, trust, and companionship. Whether you're looking for a
          playful puppy, a cuddly kitten, or a loyal older pet, we're dedicated
          to helping you find the perfect match. Our team is committed to
          providing ongoing support and resources to ensure a smooth transition
          and a lifetime of happiness for you and your new furry family member.
        </p>
        <img src="./Images/volunteer2.jpg" />
      </div>
      <div className="register-now">
        <p>
          Are you interested in adopting a furry friend? Register now to explore
          our available pets and begin your journey towards finding your perfect
          companion!
        </p>
        <a href="">Register Now!</a>
      </div>
      <Carousel />
      {/* <div className="home-shop">
        <p>
          Explore our pet shop for all your furry friend's needs! From food and
          toys to bedding and accessories, every purchase supports our mission
          to rescue and rehome animals. Check out our shop and 
        </p>
      </div> */}
      {/* <div className="home-shop2">
        <a href="/shop">Shop Now</a>
      </div> */}
      <div className="footer">
        <p>Bringing joy, one paw at a time.</p>
        <div className="contact-logo">
          <div className="mail">
            <a href="">
              {" "}
              <img src="Images/gmail.png" />
            </a>
          </div>
          <div className="insta">
            <a href="">
              <img src="Images/instagram (1).png" />
            </a>
          </div>
          <div className="whatsapp">
            <a href="">
              {" "}
              <img src="Images/logo.png" />
            </a>
            <br />
            <br />
          </div>
        </div>
        <p>
          Ph: 044-2230 0655 / 2230 0666 / 2235 4959. Important- Please Note: For
          rescues and emergencies, please call the above numbers to save time.
        </p>
        <p>&copy; Fuzzy Paws</p>
      </div>
    </div>
  );
};

export default Home;
