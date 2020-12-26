import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailsRecipe, saveRecipeReview } from '../redux/actions/recipeActions';
import { RECIPE_REVIEWS_ADD_RESET } from '../redux/types';

import { Link } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

const RecipeDetails = (props) => {
  const [comment, setComment] = useState('');
  const recipeDetails = useSelector(state => state.recipeDetails);
  const { user } = useSelector((state) => state.userSignin);
  const {recipe, loading, error} = recipeDetails;
  const recipeReviewSave = useSelector((state) => state.addReview);
  const { success: recipeSaveSuccess } = recipeReviewSave;
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipeSaveSuccess) {
      alert('Review submitted successfully.');
      setComment('');
      dispatch({ type: RECIPE_REVIEWS_ADD_RESET });
    }
    dispatch(detailsRecipe(props.match.params.id));
    return () => {
    //
    };
  }, [recipeSaveSuccess]);

  const submitHandler = (e) => {
  e.preventDefault();
  // dispatch actions
  dispatch(
    saveRecipeReview(props.match.params.id, {
      name: user.name,
      comment: comment,
    })
  );
};


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
     <center>
       <h2>Reviews</h2>

    <h3>Write a customer review</h3>
    {user ? (
      <form onSubmit={submitHandler}>
        <ul>
          <li>
            <label htmlFor="comment">Comment</label>
            <textarea
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </li>
          <li>
            <button type="submit" className="button primary">
              Submit
            </button>
          </li>
        </ul>
      </form>
    ) : (
      <div>
        Please <Link to="/signin">Sign-in</Link> to write a review.
      </div>
    )}
     </center>
    </>
  )
}

export default RecipeDetails;
