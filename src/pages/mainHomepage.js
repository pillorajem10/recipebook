import React, { useEffect } from 'react';
import Home from './home';
import NewRecipes from './newRecipes';

const MainHome = () => {

  useEffect(() => {
    document.title =  "Recipebook";
  }, []);

  return (
    <>
      <Home/>
      <NewRecipes/>
    </>
  )
}

export default MainHome
