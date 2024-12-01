import React from "react";
import { Route, Routes } from "react-router-dom";
import FoodRecipes from "./components/FoodRecipe";
import FoodDetails from "./components/FoodDetails";
import AboutUs from "./components/AboutUs";


const AppRoutes = () => {
    
    return(
        <Routes>
            <Route path="/" element={<FoodRecipes />}/>
            <Route path="/recipe/:id" element={<FoodDetails />}/>
            <Route path="/about" element={<AboutUs />} />
        </Routes>
    );
};

export default AppRoutes;