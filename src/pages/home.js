import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listRecipes } from '../redux/actions/recipeActions';

import { Link } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

const Home = (props) => {
  const recipeList = useSelector(state => state.recipeList);
  const { recipes, loading, error } = recipeList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listRecipes());
    return () => {
    //
    };
  }, [])


  return (
    loading? <CircularProgress color = 'dark' className = 'loading' /> : error? <div>{error}</div> :
    <div className = 'container'>
      {
        recipes.map(recipes =>
          <div className = 'card'>
            <b style = {{fontSize:25}}>{recipes.name}</b>
            <Link to = {`/recipe/${recipes._id}`}>
            <img
              src={`/recipe/photo/${recipes._id}`}
              style={{ maxHeight: "20rem", maxWidth: "20rem" }}
              alt = {recipes.name}
            /></Link>
          </div>
        )
      }
    </div>
  )
}

export default Home;
