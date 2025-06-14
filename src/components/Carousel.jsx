import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings} className="carousel">
        <div className="carousel-slide">
          <a href="/login">
            <img
              src="./Images/ad3.png"
              alt="Image 1"
              className="carousel-image"
            />
            <div className="overlay2">
              <p>Join our community of pet lovers</p>
              <a href="/login" className="button">
                Get Started
              </a>
            </div>
          </a>
        </div>
        <div className="carousel-slide">
          <a href="/login">
            <img
              src="./Images/ad1.avif"
              alt="Image 2"
              className="carousel-image"
            />
            <div className="overlay2">
              <p>Find your perfect pet match</p>
              <a href="/login" className="button">
                Sign In
              </a>
            </div>
          </a>
        </div>
        <div className="carousel-slide">
          <a href="/shop">
            <img
              src="./Images/ad2.png"
              alt="Image 3"
              className="carousel-image"
            />
            <div className="overlay2">
              <p>Shop for your furry friend</p>
              <a href="/shop" className="button">
                Visit Shop
              </a>
            </div>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
