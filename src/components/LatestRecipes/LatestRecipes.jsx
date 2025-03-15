import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../HomePage/HomePage.css";

const LatestRecipes = ({handleClick}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?f=f"
        );
        setRecipes(response.data.meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]);
      }
    };

    fetchRecipes();
  }, []);

  const truncateText = (text, maxLength = 25) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="container-fluid p-5 LRContainer">
      <div className="Line"></div>
      <h1>Latest Recepies</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 Row1" >
        {recipes.map((item, index) => (
          <Link to={`/meal/:${item.idMeal}`} >
            <div class="card Card" key={index} onClick={() => handleClick(item.idMeal)} style={{cursor: "pointer"}}>
              <img
                src={item.strMealThumb}
                class="card-img-top"
                alt={item.strMeal}
              />
              <div class="card-body d-flex justify-content-center CardTitle">
                <h3 class="card-title">{truncateText(item.strMeal)}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestRecipes;