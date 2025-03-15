import React from "react";
import { Link } from "react-router-dom";
import { FaReddit, FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="py-5">
        <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <div class="footOne">
              <h5>Genki grub</h5>
              <p>
                In the new era of technology we look a in the future with
                certainty and pride to for our company and.
              </p>
            </div>
            <div class="Social" style={{ marginTop: "-5px" }}>
              <ul>
                <li class="ms-3">
                  <a
                    class="text-body-secondary"
                    href="https://www.reddit.com/user/yashsehgal251103/"
                  >
                    <FaReddit />
                  </a>
                </li>
                <li class="ms-3">
                  <a
                    class="text-body-secondary"
                    href="https://www.instagram.com/i_yashsehgal/"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li class="ms-3">
                  <a
                    class="text-body-secondary"
                    href="https://www.linkedin.com/in/yash-sehgal-46b938210/"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li class="ms-3">
                  <a
                    class="text-body-secondary"
                    href="https://github.com/idarkpearl"
                  >
                    <FaSquareGithub />
                  </a>
                </li>
              </ul>
            </div>
            <div class="Social" style={{ marginTop: "-5px" }}>
              <ul>
                <li class="ms-3">
                  <a class="text-body-secondary" href="https://t.me/Qw003wue">
                    <FaTelegram />
                  </a>
                </li>
                <li class="ms-3">
                  <a
                    class="text-body-secondary"
                    href="https://www.instagram.com/shivam_dev01/"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li class="ms-3">
                  <a
                    class="text-body-secondary"
                    href="https://www.linkedin.com/in/shivam-kumar-b83971292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li class="ms-3">
                  <a
                    class="text-body-secondary"
                    href="https://github.com/Shivam-Developer01"
                  >
                    <FaSquareGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-6 col-md-2 mb-3">
            <h5>Pages</h5>
            <div class="footWork">
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <Link
                    to="/"
                    href="#"
                    class="nav-link p-0 text-body-secondary"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link to="/about" class="nav-link p-0 text-body-secondary">
                    About
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link to="/recipes" class="nav-link p-0 text-body-secondary">
                    Recipes
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link
                    to="DishOfTheDay"
                    class="nav-link p-0 text-body-secondary"
                  >
                    Dish of the day
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link
                    to="smartPantry"
                    class="nav-link p-0 text-body-secondary"
                  >
                    Smart Pantry
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-5 offset-md-1 mb-3">
            <h5>Follow Us On Instagram</h5>
            <img
              src="./images/Footerimg.jpg"
              class="img-thumbnail"
              alt="Food image"
            />
          </div>
        </div>
        <div class="verticalLine"></div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
          <p>© 2024 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
