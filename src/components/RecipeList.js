import React from 'react';
import Recipe from './Recipe';
import { useGlobalCtx } from '../context';
import Loading from '../pages/Loading';
import Categories from './Categories';

const RecipeList = () => {
  const { loading, recipes } = useGlobalCtx();

  const recipesList = recipes.map((recipe, index) => {
    return <Recipe key={index} data={recipe} />;
  });

  return (
    <section className="mt-5 text-center section-recipes">
      <h2>Recipe List</h2>
      <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem
        iure vel fuga tenetur omnis?
      </small>
      <Categories />
      {recipes.length === 0 && (
        <p className="display-1 bg-warning text-uppercase">No matches found</p>
      )}
      {loading && <Loading />}
      {!loading && (
        <div className="container recipe-container">{recipesList}</div>
      )}
    </section>
  );
};

export default RecipeList;
