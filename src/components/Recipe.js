import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ data }) => {
  const { id, name, category, img } = data;

  return (
    <div className="recipe-item card">
      <img src={img} alt={name} />

      <div className="card-body d-flex flex-column justify-content-between">
        <h3 className="card-title">{name}</h3>
        <p className="card-text category-tag align-self-center">
          Category: {category}
        </p>
        <Link to={`/recipe/${id}`}>
          <button className="my-3 view-btn align-self-stretch">
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
