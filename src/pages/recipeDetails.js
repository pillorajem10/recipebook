import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailsRecipe } from '../redux/actions/recipeActions';

import { Link } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

const RecipeDetails = (props) => {
  const recipeDetails = useSelector(state => state.recipeDetails);
  const {recipe, loading, error} = recipeDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsRecipe(props.match.params.id));
    return () => {
    //
    };
  }, [])


  return (
    loading? <CircularProgress color = 'dark' className = 'loading' /> : error? <div>{error}</div> :
    <>
      <div className = 'details-container'>
        <p className = 'recipeName'>{recipe.name}</p>
        <img
          src={`/recipe/photo/${recipe._id}`}
          style={{ maxHeight: "90%", maxWidth: "90%", marginTop:'1%' }}
          alt = {recipe.name}
        />
        <div style = {{fontSize:18, marginTop:'3%'}}>{recipe.description}</div>
        <div style = {{fontSize:18, marginTop:'3%'}}>Ingredients: {recipe.ingredients}</div>
        <div style = {{fontSize:18, marginTop:'3%'}}>Instructions: {recipe.instruction}</div>
      </div>
    </>
  )
}

export default RecipeDetails;
