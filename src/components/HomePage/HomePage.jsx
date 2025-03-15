import React from "react";
import LatestRecipes from "../LatestRecipes/LatestRecipes";
import DishOfTheDay from "../DOD/DOD";
import MostFamousRecipies from "../MFRecipes/MFRecipies";
import "./HomePage.css";

const HomePage = ({handleClick}) => {
  return (
    <div className="container-fluid">
      <LatestRecipes handleClick={handleClick}/>
      <DishOfTheDay handleClick={handleClick}/>
      <MostFamousRecipies handleClick={handleClick}/>
    </div>
  );
};

export default HomePage;
