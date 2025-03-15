import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SlideShow from "./components/SlideShow/SlideShow";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import RecipesPagination from "./components/Recipies/RecipiesPagination";
import RecipeSearch from "./components/SmartPantry/SmartPantry";
import DishOfTheDay from "./components/DOD/DOD";
import MealDetails from "./components/MealDetails";
import Footer from "./components/Footer/Footer";

const App = () => {
  const navigate = useNavigate(); // Import and use navigate
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleClick = (selectedRecipeId) => {
    console.log("Clicked Meal ID:", selectedRecipeId);
    setSelectedRecipeId(selectedRecipeId);
    navigate(`/meal/:${selectedRecipeId}`); // Ensure it navigates correctly
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SlideShow />
              <HomePage handleClick={handleClick} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/recipes"
          element={<RecipesPagination handleClick={handleClick} />}
        />
        <Route
          path="/smartPantry"
          element={<RecipeSearch handleClick={handleClick} />}
        />
        <Route
          path="/DishOfTheDay"
          element={<DishOfTheDay handleClick={handleClick} />}
        />
        <Route path="/meal/:mealId" element={<MealDetails mealId={selectedRecipeId}/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
