import React, { useState, useEffect } from 'react';
import { useGlobalCtx } from '../context';

const Categories = () => {
  const { categories, setRecipes, setLoading } = useGlobalCtx();
  const [index, setIndex] = useState(0);
  const [categoryName, setCategoryName] = useState('Beef');

  const moveRight = () => {
    setIndex((prev) => prev + 1);
  };
  const moveLeft = () => {
    setIndex((prev) => prev - 1);
  };

  const filterHandler = (name) => {
    setCategoryName(name);
  };

  const moving = {
    transform: `translateX(-${index * 62.5}rem)`,
  };

  const fetchFilteredData = async () => {
    setLoading(true);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );
    const filteredData = await res.json();
    const { meals } = filteredData;

    if (meals) {
      const newMeals = meals.map((item) => {
        const { idMeal, strMeal, strMealThumb } = item;
        return {
          id: idMeal,
          name: strMeal,
          category: categoryName,
          img: strMealThumb,
        };
      });

      setRecipes(newMeals);
      setLoading(false);
    } else {
      setRecipes([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilteredData();
  }, [categoryName]);

  return (
    <div className="wrap">
      <div className="category-list">
        {categories.map((categ) => {
          const { id, name, img } = categ;
          return (
            <div
              className="category"
              key={id}
              style={moving}
              onClick={() => {
                filterHandler(name);
              }}
            >
              <div className="img-container">
                <img src={img} alt={name} className="category-img" />
              </div>
              <p className="category-name">{name}</p>
            </div>
          );
        })}
      </div>

      {index !== 0 && (
        <button className="btn-left" onClick={moveLeft}>
          <i className="fa-solid fa-left-long"></i>
        </button>
      )}
      {index !== 2 && (
        <button className="btn-right" onClick={moveRight}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      )}
    </div>
  );
};

export default Categories;
