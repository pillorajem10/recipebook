import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailsRecipe, saveRecipeReview } from '../redux/actions/recipeActions';
import { RECIPE_REVIEWS_ADD_RESET } from '../redux/types';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';

import { Link } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

const RecipeDetails = (props) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const recipeDetails = useSelector(state => state.recipeDetails);
  const { user } = useSelector((state) => state.userSignin);
  const {recipe, loading, error} = recipeDetails;
  const recipeReviewSave = useSelector((state) => state.addReview);
  const { success: recipeSaveSuccess } = recipeReviewSave;
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipeSaveSuccess) {
      alert('Comment successfully added.');
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
      rating: rating,
      comment: comment,
      userRole: user.role
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
     <hr/>
     <center>
       <center className = 'welcomeTitle'>Reviews</center>
       {recipe.reviews && recipe.reviews.length > 0 ? (
         <div>
           {recipe.reviews && recipe.reviews.map((review) => (
             <div style = {{ marginTop: '1.5rem' }} key={review._id}>
               { review.userRole === 1 ? (
                 <b style = {{ fontSize: '1.2rem' }} >{review.name} (Admin)</b>
               ) : (
                 <b style = {{ fontSize: '1.2rem' }} >{review.name}</b>
               ) }
               <div><Rating readOnly value={review.rating}/></div>
               <div style = {{ fontSize: '1.5rem' }} >{review.comment}</div>
             </div>
           ))}
         </div>
       ) : (
         <h3>
          There are no reviews in this recipe. Write the first one
         </h3>
       )}
       <hr/>
       <center className = 'welcomeTitle'>Rate this recipe</center>
       <Rating
         name="rating"
         id='rating'
         value={rating}
         onChange={(event, newValue) => {
           setRating(newValue);
         }}
       />
       <hr/>
       <center className = 'welcomeTitle'>Write a comment here</center>
       {user ? (
         <div  className = 'container'>
           <form className = 'form-container' onSubmit = {submitHandler}>
             <div class="form-group">
               <textarea
                rows = '5'
                type = "text"
                className = "form-control"
                placeholder = "Do you have comments in this recipe? Write here."
                required
                name = 'comment'
                id = 'comment'
                value = {comment}
                onChange={(e) => setComment(e.target.value)}
               />
             </div>
             <Button variant="contained" type="submit">Comment</Button>
           </form>
         </div>
       ) : (
         <div>
           Please <Link to="/">Sign-in</Link> to write a reviews.
         </div>
       )}
     </center>
    </>
  )
}

export default RecipeDetails;
