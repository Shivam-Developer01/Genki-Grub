import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container-fluid">
      <div class="container-fluid p-5">
        <div className="Line"></div>
        <h1>About Us</h1>
        <div>
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <p class="midtext">
                  Welcome to Genki grub, your ultimate destination for delicious
                  recipes, smart cooking solutions, and personalized food
                  recommendations! Our platform is designed to make cooking
                  easier, more enjoyable, and tailored to your taste. We bring
                  you an extensive collection of recipes sourced from top-notch
                  APIs, ensuring you have access to a diverse range of dishes,
                  from quick everyday meals to gourmet delights. Whether you're
                  looking for inspiration, meal planning assistance, or smart
                  pantry management, we’ve got you covered.
                  <br /> What We Offer:
                </p>
              </div>
              <div class="col mb-3">
                <img
                  src="./images/IIITbg.jpg"
                  class="img-fluid"
                  alt="creator"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <p class="midtext">
                  🍽 Recipes - Explore a vast collection of recipes with
                  step-by-step instructions.
                  <br />
                  🏠 Home Recipes – Share and discover homemade favorites.
                  <br />
                  📖 About Food – Learn about ingredients, cooking techniques,
                  and food history.
                  <br />
                  🔍 Food Recommendation – Get personalized dish suggestions
                  based on your preferences.
                  <br />
                  🛒 Smart Pantry – Keep track of your ingredients and find
                  recipes based on what you have.
                  <br />
                  📩 Contact Us – Reach out for inquiries, suggestions, or
                  collaborations. Join us in making cooking smarter, simpler,
                  and more exciting!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <img
                  src="./images/Shivam.jpg"
                  class="img-fluid PImg"
                  alt="creator"
                />
                <h2>Shivam Kumar</h2>
                <p>
                  Hola amigos, I’m Shivam Kumar, a passionate web developer and tech
                  innovator, currently leading Tech Spark as General Secretary.
                  specialized in React, Bootstrap, and Programming Languages, creating
                  real-time web apps, including an Ayurveda wellness platform.
                  Let’s connect and build impactful tech solutions together! 🚀
                </p>
              </div>
              <div class="col">
                <img
                  src="./images/IMG-20241212-WA0014.jpg"
                  class="img-fluid PImg"
                  alt="creator"
                />
                <h2>Yash Sehgal</h2>
                <p>
                  Hey, I’m Yash Sehgal! 👨💻A 2nd-year CSE student building
                  websites by day 🌟, solving problems for fun 🧩, and obsessing
                  over manhwa/anime by night 📚🍿. I’m either coding,
                  brainstorming my next project 🤔💡, or hunting for the perfect
                  snack 🍜. Always up to geek out about tech, swap anime recs,
                  or just chat—let’s connect! 💬✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
