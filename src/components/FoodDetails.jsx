import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";


const FoodDetail = () => {
    const {id} = useParams();
    const [recipe, setRecipes] = useState(null);

    useEffect(() => {
        const fetchFoodDetails = async () => {
            const apiKey = '6096ec38f320449c8b470ae0f4fa4939';
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
            
            const data = await response.json();
            setRecipes(data);
        };

        fetchFoodDetails();
    }, [id]);

    if(!recipe){
        return <p>Loading...</p>
    }

    return(
        <div className="recipe-details">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <h3>Ingredients</h3>
            <ul>
                {recipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default FoodDetail;




