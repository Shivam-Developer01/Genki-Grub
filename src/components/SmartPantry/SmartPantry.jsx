import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipeSearch = ({handleClick}) => {
  const [query, setQuery] = useState("rice");
  const [recipes, setRecipes] = useState([]);

  const truncateText = (text, maxLength = 25) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  useEffect(() => {
    if (query) {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`)
        .then((response) => response.json())
        .then((data) => setRecipes(data.meals || []))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [query]);

  return (
    <div className="container-fluid p-5 LRContainer">
      <div className="Line"></div>
      <h1>Smart Pantry</h1>
      <div className="mb-5 d-flex justify-content-center">
        <input
          type="search"
          className="form-control"
          placeholder="Search for an ingredient..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ maxWidth: "40vw", fontSize: "1.35rem" }}
        />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 Row1">
        {recipes.length > 0 ? (
          recipes.map((meal) => (
            <Link to={`/meal/:${meal.idMeal}`} key={meal.idMeal}>
              <div className="card Card" onClick={() => handleClick(meal.idMeal)} style={{cursor: "pointer"}}>
                <img
                  src={meal.strMealThumb}
                  className="card-img-top"
                  alt={meal.strMeal}
                />
                {console.log(meal.idMeal)}
                <div className="card-body d-flex justify-content-center CardTitle">
                  <h5 className="card-title">{truncateText(meal.strMeal)}</h5>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeSearch;
