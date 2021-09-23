import React, { useEffect, useState } from 'react';
import './App.css';
import EdamamAPI from './API/Edamam/EdamamAPI';
import { Card } from './Component/Card/Card';
import { Link, Recipe } from './API/Edamam/RecipesModel';

function App() {

  const [isloading, setIsloading] = useState<Boolean>(true);
  const [recipes, setRecipes] = useState<{ recipe: Recipe; _links: Link; }[]>();

  useEffect(() => {
    (async () => {
      const res = await new EdamamAPI().getRecipes("chicken");
      setRecipes(res.hits);
      setIsloading(false);
    })();

  }, []);

  return (
    isloading ? <div> Loading...</div> :
      <div className="app">
        {recipes?.map((item, i) => <Card key={i} {...item.recipe} />)}
      </div>
  );
}

export default App;
