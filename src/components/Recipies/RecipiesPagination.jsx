import React, { useEffect, useState } from "react";
import axios from "axios";
import "../HomePage/HomePage.css";
import "./RecipesPagination.css";

const RecipesPagination = ({handleClick}) => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 18;
  // const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          // `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=5&apiKey=${apiKey}`
          "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        );
        setRecipes(response.data.meals || []); // Adjust according to API response structure
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]); // Ensure recipes is always an array even on error
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

  // Get current recipes
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid">
      {recipes.length ? (
        <>
          <div className="container-fluid p-5 LRContainer">
            <div className="Line"></div>
            <h1>Recepies</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 Row" >
              {Array.isArray(currentRecipes) &&
                currentRecipes.map((recipe, index) => (
                  <div class="card Card Card1" onClick={() => handleClick(recipe.idMeal)} style={{cursor: "pointer"}} key={index}>
                    <img
                      src={recipe.strMealThumb}
                      className="card-img-top"
                      alt={recipe.strMeal}
                      style={{ objectFit: "cover" }}
                    />
                    <div class="card-body d-flex justify-content-center CardTitle">
                      <h3 class="card-title">{truncateText(recipe.strMeal)}</h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <nav>
            <ul className="pagination justify-content-center">
              {Array.from(
                { length: Math.ceil(recipes.length / recipesPerPage) },
                (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      onClick={() => paginate(index + 1)}
                      className="page-link"
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
        </>
      ) : (
        <div className="container-fluid d-flex justify-content-center">
          <div class="d-flex justify-content-center">
            <div class="spinner-border Spinner" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipesPagination;
