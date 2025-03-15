import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div class="col-md-3 mb-2 mb-md-0">
          <Link
            to="/"
            class="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <div class="text-center">
              <img src="./images/Logo.jpg" class="logo" alt="logo" />
            </div>
          </Link>
        </div>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          {/* <input
            type="search"
            class="form-control"
            placeholder=" Search..."
            aria-label="Search"
          /> */}
        </form>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" class="nav-link px-2 link-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" class="nav-link px-2">
              About
            </Link>
          </li>
          <li>
            <Link to="/recipes" class="nav-link px-2">
              Recipes
            </Link>
          </li>
          <li>
            <Link to="DishOfTheDay" class="nav-link px-2">
              Dish of the day
            </Link>
          </li>
          <li>
            <Link to="smartPantry" class="nav-link px-2">
              Smart Pantry
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
