import React from "react";
import "./SlideShow.css";
import { Link } from "react-router-dom";

const SlideShow = () => {
  return (
    <>
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-label="Slide 1"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <video autoPlay muted loop>
              <source src="./Videos/V1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Discover Delicious Recipes</h1>
                <p class="opacity-75">
                  Find a variety of mouth-watering recipes, from quick meals to
                  gourmet dishes. Cook with ease and enjoy every bite!
                </p>
                <p>
                  <Link to="#" class="btn btn-lg btn-primary">
                    Sign up today
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="10000">
            <video autoPlay muted loop>
              <source src="./Videos/V2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div class="container">
              <div class="carousel-caption">
                <h1>Smart Pantry, Smarter Cooking</h1>
                <p>
                  Track your ingredients and get recipe suggestions based on
                  what you have. No more wasted food—just creative cooking!
                </p>
                <p>
                  <Link to="/about" class="btn btn-lg btn-primary">
                    Learn more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <video autoPlay muted loop>
              <source src="./Videos/V3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>Personalized Food Recommendations</h1>
                <p>
                  Let us help you find the perfect dish based on your taste,
                  mood, and dietary preferences. Cooking made just for you!
                </p>
                <p>
                  <Link to="/recipes" class="btn btn-lg btn-primary">
                    Food Recommendations
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default SlideShow;
