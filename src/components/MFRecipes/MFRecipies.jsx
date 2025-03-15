import React, { useEffect, useState } from "react";
import axios from "axios";

const MostFamousRecipies = ({handleClick}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?f=v"
        );
        setRecipes(response.data.meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container-fluid p-5">
      <div className="Line"></div>
      <h1>Most Famous Recepies</h1>
      <div class="row" >
        <div className="col-md-6 d-flex flex-column align-items-start">
          {recipes.slice(0, 3).map((recipe, index) => (
            <div className="d-flex align-items-center mb-4 MFR" key={index} onClick={() => handleClick(recipe.idMeal)} style={{cursor: "pointer"}}>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="img-fluid rounded"
                style={{
                  width: "12rem",
                  height: "12rem",
                  objectFit: "cover",
                }}
              />
              <h2 className="mb-0 ms-3 fs-5">{recipe.strMeal}</h2>
            </div>
          ))}
        </div>
        <div className="col-md-6 d-flex flex-column align-items-start">
          {recipes.slice(3, 6).map((recipe, index) => (
            <div className="d-flex align-items-center mb-4 MFR" key={index} onClick={() => handleClick(recipe.idMeal)} style={{cursor: "pointer"}}>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="img-fluid rounded"
                style={{
                  width: "12rem",
                  height: "12rem",
                  objectFit: "cover",
                }}
              />
              <h2 className="mb-0 ms-3 fs-5">{recipe.strMeal}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostFamousRecipies;
