import React, { useEffect, useState, FunctionComponent } from 'react';
import './App.css';
import EdamamAPI from './API/Edamam/EdamamAPI';
import { Card } from './Component/Card/Card';
import { CuisineType, Diet, Link, MealTypes, Recipe } from './API/Edamam/RecipesModel';
import { SearchBar } from './Component/SearchBar/SearchBar';
import { LoadingButton, SeeMoreHandler } from './Component/Button/LoadingButton'

const App: FunctionComponent = () => {

  const edamamApi = new EdamamAPI();
  const [isloading, setIsloading] = useState<Boolean>(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState<Boolean>(false);
  const [nextPageUrl, setNextPageUrl] = useState<string>("");
  const [recipes, setRecipes] = useState<{ recipe: Recipe; _links: Link; }[]>([]);

  useEffect(() => {
    (async () => {
      const res = await edamamApi.getRecipes("chicken rice beef");
      if (res._links.next)
        setNextPageUrl(res._links.next.href);
      else
        setNextPageUrl("")
      setRecipes(res.hits);
      setIsloading(false);
    })();
    // eslint-disable-next-line
  }, []);

  const fetchWithArgs = async (food: string, diet: Diet, cuisineType: CuisineType, mealType: MealTypes) => {
    setIsloading(true);
    const res = await edamamApi.getRecipes(food, diet, cuisineType, mealType);
    if (res._links.next)
      setNextPageUrl(res._links.next.href);
    else
      setNextPageUrl("")
    setRecipes(res.hits);
    setIsloading(false);
  }

  const loadNextpage = async () => {
    setIsNextPageLoading(true);
    const res = await edamamApi.getNextPageOfRecipes(nextPageUrl);
    setIsNextPageLoading(false);
    setRecipes([...recipes, ...res.hits]);
    if (res._links.next)
      setNextPageUrl(res._links.next.href);
    else
      setNextPageUrl("")
  }

  return (

    <div className="app">
      <SearchBar fetchWithArgs={fetchWithArgs} />
      {isloading ? <div> Loading...</div> :
        <div className="app2">
          {recipes?.map((item, i) => <Card key={i} {...item.recipe} />)}
          {(!isloading && recipes?.length === 0) && <div>No result</div>}
        </div>}
      {!isloading &&<SeeMoreHandler>{nextPageUrl.length > 0 && <LoadingButton isLoading={isNextPageLoading} onClick={loadNextpage}>See More</LoadingButton>}</SeeMoreHandler>}
    </div>
  );
}

export default App;