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
      <img
        src={`/recipe/photo/${recipe._id}`}
        style={{ maxHeight: "25%", maxWidth: "25%" }}
        alt = {recipe.name}
      />
      <ul style={{ maxWidth: "25%" }} className = 'description card'>
        Description: <li>{recipe.description}</li>
      </ul>
      <ul className = 'instruction-container' style={{ width: "25%" }} className = 'description card'>
        Ingredients:
        <li className = 'instructions'>{recipe.ingredients}</li>
        <li className = 'instructions'>{recipe.ingredients1}</li>
        <li className = 'instructions'>{recipe.ingredients2}</li>
        <li className = 'instructions'>{recipe.ingredients3}</li>
        <li className = 'instructions'>{recipe.ingredients4}</li>
        <li className = 'instructions'>{recipe.ingredients5}</li>
        <li className = 'instructions'>{recipe.ingredients6}</li>
        <li className = 'instructions'>{recipe.ingredients7}</li>
        <li className = 'instructions'>{recipe.ingredients8}</li>
        <li className = 'instructions'>{recipe.ingredients9}</li>
        <li className = 'instructions'>{recipe.ingredients10}</li>
      </ul>
      <ul className = 'instruction-container' style={{  width: "25%" }} className = 'description card'>
        Instruction:
        <li className = 'instructions'>{recipe.instruction}</li>
        <li className = 'instructions'>{recipe.instruction1}</li>
        <li className = 'instructions'>{recipe.instruction2}</li>
        <li className = 'instructions'>{recipe.instruction3}</li>
        <li className = 'instructions'>{recipe.instruction4}</li>
        <li className = 'instructions'>{recipe.instruction5}</li>
        <li className = 'instructions'>{recipe.instruction6}</li>
        <li className = 'instructions'>{recipe.instruction7}</li>
        <li className = 'instructions'>{recipe.instruction8}</li>
        <li className = 'instructions'>{recipe.instruction9}</li>
        <li className = 'instructions'>{recipe.instruction10}</li>
      </ul>
     </div>
    </>
  )
}

export default RecipeDetails;
