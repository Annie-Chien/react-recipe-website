import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('a'); //用來存放使用者輸入的文字內容
  const [recipes, setRecipes] = useState([]); //用來存放要展示在畫面上的食譜們
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchTerm}`);
      const data = await res.json();
      const { meals } = data;
      if (meals) {
        const newMeals = meals.map((item) => {
          const { idMeal, strMeal, strCategory, strMealThumb } = item;
          return {
            id: idMeal,
            name: strMeal,
            category: strCategory,
            img: strMealThumb,
          };
        });
        setRecipes(newMeals);
      } else {
        setRecipes([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  // 抓categories資料
  const getCategories = async () => {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
    const json = await res.json();
    const { categories } = json;

    const newCategories = categories.map((categ) => {
      const { idCategory, strCategory, strCategoryThumb } = categ;
      return {
        id: idCategory,
        name: strCategory,
        img: strCategoryThumb,
      };
    });
    setCategories(newCategories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <AppContext.Provider
      value={{
        setSearchTerm,
        loading,
        recipes,
        categories,
        setRecipes,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalCtx = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
