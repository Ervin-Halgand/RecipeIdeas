import React, { useEffect, useState, FunctionComponent } from 'react';
import './App.css';
import EdamamAPI from './API/Edamam/EdamamAPI';
import { Card } from './Component/Card/Card';
import { CuisineType, Diet, Link, MealTypes, Recipe } from './API/Edamam/RecipesModel';
import { SearchBar } from './Component/SearchBar/SearchBar';
import { LoadingButton, SeeMoreHandler } from './Component/Button/LoadingButton'
import { NoResult } from './Component/SearchBar/NoResult/NoResult';
import { CardSkeletonLoader } from './Component/Card/CardSkeletonLoader/CardSkeletonLader';
import { Header } from './Component/Header/Header';
import { Footer } from './Component/Footer/Footer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const App: FunctionComponent = () => {

  const edamamApi = new EdamamAPI();
  const [isloading, setIsloading] = useState<Boolean>(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState<Boolean>(false);
  const [nextPageUrl, setNextPageUrl] = useState<string>("");
  const [recipes, setRecipes] = useState<{ recipe: Recipe; _links: Link; }[]>([]);
  let skeletonLoaduingCards = () => {
    let list = [];
    for (let i = 0; i < 12; i++)
      list.push(<CardSkeletonLoader key={i}></CardSkeletonLoader>)
    return (list)
  }

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

    <main>
      <Header />
      <div className="app">
        <SearchBar fetchWithArgs={fetchWithArgs} />
        <div className="grid2">
          {isloading && skeletonLoaduingCards()}
        </div>
        <div className="grid">
          <TransitionGroup>
            {!isloading && recipes?.map((item, i) => <CSSTransition key={i} classNames="example" timeout={{ enter: 500, exit: 100 }}>
              <Card {...item.recipe} /></CSSTransition>)
            }
          </TransitionGroup>
        </div>
      </div >
      {(!isloading && recipes?.length === 0) && <NoResult />}
      {!isloading && <SeeMoreHandler>{nextPageUrl.length > 0 && <LoadingButton isLoading={isNextPageLoading} onClick={loadNextpage}>See More</LoadingButton>}</SeeMoreHandler>}
      <Footer />
    </main >
  );
}

export default App;