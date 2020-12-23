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
     <center className = 'recipeName'>{recipe.name}</center>
     <div className = 'details-container'>
       <div className = 'card'>
         <img
           src={`/recipe/photo1/${recipe._id}`}
           style={{ maxHeight: "100%", maxWidth: "100%", textAlign: 'center' }}
           alt = {recipe.name}
         />
       </div>
       <ul style={{ maxWidth: "30rem", maxHeight: "30rem"  }} className = 'description card'>
         Description: <b>{recipe.description}</b>
       </ul>
       <ul className = 'instruction-container' style={{ width: "30rem" }} className = 'description card'>
         Ingredients:
         <b className = 'instructions'>{recipe.ingredients}</b>
         <b className = 'instructions'>{recipe.ingredients1}</b>
         <b className = 'instructions'>{recipe.ingredients2}</b>
         <b className = 'instructions'>{recipe.ingredients3}</b>
         <b className = 'instructions'>{recipe.ingredients4}</b>
         <b className = 'instructions'>{recipe.ingredients5}</b>
         <b className = 'instructions'>{recipe.ingredients6}</b>
         <b className = 'instructions'>{recipe.ingredients7}</b>
         <b className = 'instructions'>{recipe.ingredients8}</b>
         <b className = 'instructions'>{recipe.ingredients9}</b>
         <b className = 'instructions'>{recipe.ingredients10}</b>
       </ul>
       <ul className = 'instruction-container' style={{  width: "30rem" }} className = 'description card'>
         Instructions:
         <b className = 'instructions'>{recipe.instruction}</b>
         <b className = 'instructions'>{recipe.instruction1}</b>
         <b className = 'instructions'>{recipe.instruction2}</b>
         <b className = 'instructions'>{recipe.instruction3}</b>
         <b className = 'instructions'>{recipe.instruction4}</b>
         <b className = 'instructions'>{recipe.instruction5}</b>
         <b className = 'instructions'>{recipe.instruction6}</b>
         <b className = 'instructions'>{recipe.instruction7}</b>
         <b className = 'instructions'>{recipe.instruction8}</b>
         <b className = 'instructions'>{recipe.instruction9}</b>
         <b className = 'instructions'>{recipe.instruction10}</b>
       </ul>
     </div>
    </>
  )
}

export default RecipeDetails;
