import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { Link, useParams } from 'react-router-dom';

const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const SingleRecipe = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async () => {
    setLoading(true);
    const res = await fetch(`${url}${id}`);
    const recipeData = await res.json();

    const {
      strCategory: category,
      strInstructions: instruction,
      strMeal: name,
      strMealThumb: img,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
    } = recipeData.meals[0];

    const ingredients = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
    ];

    const newRecipe = {
      name,
      category,
      instruction,
      ingredients,
      img,
    };
    setRecipe(newRecipe);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!recipe) {
    return <p>No recipe!</p>;
  }
  const { name, category, instruction, ingredients, img } = recipe;
  return (
    <section className="section-recipe container ">
      <h2>{name}</h2>
      <div className="row my-5 gap-3">
        <div className="img-container col-md-5">
          <img src={img} alt={name} />
        </div>
        <div className="text-container col-md-7">
          <h3>
            <i className="fa-solid fa-basket-shopping"></i> Ingredients
          </h3>
          <ul className="ingredient-list">
            {ingredients
              // 過濾掉空字串的 ing
              .filter((ing) => ing !== '')
              .map((ing, i) => {
                return <li key={i}>{ing}</li>;
              })}
          </ul>
          <span className="category-tag">Category: {category}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 instruction">
          <h3>
            <i className="fa-solid fa-seedling"></i> Instructions
          </h3>
          <p>{instruction}</p>
        </div>
      </div>
      <div className="row">
        <Link to="/" className="btn-return">
          <i className="fa-solid fa-circle-left"></i> Return
        </Link>
      </div>
    </section>
  );
};

export default SingleRecipe;
