import React, {useState} from "react";
import {Link} from 'react-router-dom';


const FoodRecipes = () => {

    const [query, setQuery] = useState('');
    const [recipes , setRecipes] = useState([]);

    const FetchFoods = async () => {
        const apiKey = '6096ec38f320449c8b470ae0f4fa4939';
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`);

        const data = await response.json();
        setRecipes(data.results);
    };

    return(

        <div>
            <input 
            type="text"
            placeholder="Search for a food recipe..."
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
            />

            <button onClick={FetchFoods}>
                Search
            </button>

            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <div className="recipe-card" key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <img src={recipe.image} alt={recipe.title} />
                        <Link to={`/recipe/${recipe.id}`}>View details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodRecipes;