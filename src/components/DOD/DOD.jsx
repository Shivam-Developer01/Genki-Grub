import React, { useEffect, useState } from "react";
import axios from "axios";
import "../HomePage/HomePage.css";

const DishOfTheDay = ({handleClick}) => {
  const [recipe, setRecipe] = useState(null); // Initialize as null for clearer checks
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i=53022"
        );
        if (
          response.data &&
          response.data.meals &&
          response.data.meals.length > 0
        ) {
          setRecipe(response.data.meals[0]); // Set the first meal directly
        } else {
          setRecipe(null);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipe(null);
      } finally {
        setLoading(false); // Stop loading after the fetch attempt
      }
    };

    fetchRecipe();
  }, []);

  return (
    <div className="container-fluid p-5" style={{ maxWidth: "78vw" }}>
      <div className="Line"></div>
      <h1>Dish Of The Day</h1>
      <div
        className="d-flex justify-content-center"
        style={{ cursor: "pointer" }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : recipe ? (
            <img
              src={recipe.strMealThumb}
              className="img-fluid DodImg"
              alt={recipe.strMeal}
              onClick={() => handleClick(recipe.idMeal)}
            />
        ) : (
          <p>No recipe found.</p>
        )}
      </div>
    </div>
  );
};

export default DishOfTheDay;
