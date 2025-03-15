import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "../components/HomePage/HomePage.css";
import "./MealDetails.css";


const MealDetails = ({mealId}) => {
  // const {mealId} = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mealId) return;

    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMeal(data.meals[0]);
        } else {
          setMeal(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meal details:", error);
        setLoading(false);
      });
  }, [mealId]);

  if (loading) return <p className="text-center text-secondary">Loading...</p>;
  if (!meal) return <p className="text-center text-danger">No meal found!</p>;

  // Extract ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    }
  }

  return (
    <div className="container my-5">
      <div className="Line"></div>
      <h1>{meal.strMeal}</h1>
      <div className="card p-4  d-flex align-items-start MDC">
        <div className="d-flex">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="img-fluid rounded me-3 MDs1"
            style={{ width: "30vw", height: "60vh", objectFit: "fit" }}
          />
          <div>
            <p className="mb-1">
              <strong>Area:</strong> {meal.strArea || "Unknown"}
            </p>
            <p className="mb-1">
              <strong>Id:</strong> {meal.idMeal}
            </p>
            <p className="mb-1">
              <strong>Veg/Non-Veg:</strong> {meal.strCategory}
            </p>
          </div>
        </div>

        <h5 className="mt-3 text-danger">Food Ingredients</h5>
        <ul className="list-group list-group-flush">
          {ingredients.length > 0 ? (
            ingredients.map((item, index) => (
              <li key={index} className="list-group-item MDC">
                {item}
              </li>
            ))
          ) : (
            <li className="list-group-item">Ingredients not available</li>
          )}
        </ul>

        <h5 className="mt-3 text-danger">Food Recipe</h5>
        <p className="text-dark">{meal.strInstructions}</p>

        {meal.strYoutube && (
          <>
            <h5 className="mt-3 text-danger">YouTube link</h5>
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Watch Recipe
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default MealDetails;
