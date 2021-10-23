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
import { RealoadPage } from './Component/Error/ReloadPage';

const App: FunctionComponent = () => {

  const edamamApi = new EdamamAPI();
  const [isLoading, setIsLoading] = useState<{ firstLoad: boolean, nextPage: boolean }>({ firstLoad: false, nextPage: false });
  const [errorHandler, setErrorHandler] = useState<{ firstLoad: boolean, nextPage: boolean }>({ firstLoad: false, nextPage: false });
  const [nextPageUrl, setNextPageUrl] = useState<string>("");
  const [recipes, setRecipes] = useState<{ recipe: Recipe; _links: Link; }[]>([]);
  let skeletonLoaduingCards = () => {
    let list = [];
    for (let i = 0; i < 12; i++)
      list.push(<CardSkeletonLoader key={i}></CardSkeletonLoader>)
    return (list)
  }
  const initialFecthing = async () => {
    try {
      setIsLoading({ ...isLoading, firstLoad: true });
      const res = await edamamApi.getRecipes("chicken rice beef");
      if (res._links.next)
        setNextPageUrl(res._links.next.href);
      else
        setNextPageUrl("")
      setRecipes(res.hits);
      setIsLoading({ ...isLoading, firstLoad: false });
      setErrorHandler({ ...errorHandler, firstLoad: false });
    }
    catch (err) {
      console.error(err);
      setErrorHandler({ ...errorHandler, firstLoad: true });
      setIsLoading({ ...isLoading, firstLoad: false });
    }
  };
  useEffect(() => {
    initialFecthing();
    // eslint-disable-next-line
  }, []);

  const fetchWithArgs = async (food: string, diet: Diet, cuisineType: CuisineType, mealType: MealTypes) => {
    try {
      setIsLoading({ ...isLoading, firstLoad: true });
      const res = await edamamApi.getRecipes(food, diet, cuisineType, mealType);
      if (res._links.next)
        setNextPageUrl(res._links.next.href);
      else
        setNextPageUrl("")
      setRecipes(res.hits);
      setIsLoading({ ...isLoading, firstLoad: false });
      setErrorHandler({ ...errorHandler, firstLoad: false });
    }
    catch (err) {
      console.error(err);
      setIsLoading({ ...isLoading, firstLoad: false });
      setErrorHandler({ ...errorHandler, firstLoad: true });
    }
  }

  const loadNextpage = async () => {
    try {
      setIsLoading({ ...isLoading, nextPage: true });
      const res = await edamamApi.getNextPageOfRecipes(nextPageUrl);
      setIsLoading({ ...isLoading, nextPage: false });
      setRecipes([...recipes, ...res.hits]);
      if (res._links.next)
        setNextPageUrl(res._links.next.href);
      else
        setNextPageUrl("")
      setErrorHandler({ ...errorHandler, nextPage: false });
    }
    catch (err) {
      console.error(err);
      setIsLoading({ ...isLoading, nextPage: false });
      setErrorHandler({ ...errorHandler, nextPage: true });
    }
  }

  return (

    <main>
      <Header />
      <div className="app">
        <SearchBar fetchWithArgs={fetchWithArgs} />
        <div className="grid2">
          {isLoading.firstLoad && skeletonLoaduingCards()}
        </div>
        <div className="grid">
          <TransitionGroup>
            {!isLoading.firstLoad && recipes?.map((item, i) => <CSSTransition key={i} classNames="example" timeout={{ enter: 500, exit: 100 }}>
              <Card {...item.recipe} /></CSSTransition>)
            }
          </TransitionGroup>
        </div>
      </div >
      {(!isLoading.firstLoad && recipes?.length === 0 && !errorHandler.firstLoad) && <NoResult />}
      {errorHandler.firstLoad && !isLoading.firstLoad && <RealoadPage onClick={initialFecthing} />}
      {!isLoading.firstLoad && <SeeMoreHandler>{nextPageUrl.length > 0 && <LoadingButton isLoading={isLoading.nextPage} onClick={loadNextpage}>See More</LoadingButton>}</SeeMoreHandler>}
      <Footer />
    </main >
  );
}

export default App;