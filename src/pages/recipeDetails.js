import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { rbook } from '../redux/combineActions';

import { RECIPE_REVIEWS_ADD_RESET } from '../redux/types';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';

import { Link } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

const RecipeDetails = (props) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const { recipe, loading, error, success } = useSelector(state => state.rbook.recipe);
  const { user } = useSelector((state) => state.rbook.user);

  useEffect(() => {
    if (success) {
      alert('Comment successfully added.');
      setComment('');
      dispatch({ type: RECIPE_REVIEWS_ADD_RESET });
    }
    dispatch(rbook.recipe.detailsRecipe(props.match.params.id));
    return () => {
      dispatch(rbook.recipe.setSearchKeyword(''));
    };
  }, [success]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch actions
    dispatch(
      rbook.recipe.saveRecipeReview(props.match.params.id, {
        name: user.name,
        rating: rating,
        comment: comment,
        userRole: user.role
      })
    );
  };

  if (!recipe) return null;

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
       <div style={{ maxWidth: "30rem", maxHeight: "30rem"  }} className = 'description card'>
         <div style = {{ fontSize: '1.5rem' }} ><b>Description:</b></div>
         <div>{recipe.description}</div>
       </div>
       <div className = 'instruction-container' style={{ width: "30rem" }} className = 'description card'>
         <div style = {{ fontSize: '1.5rem' }} ><b>Ingredients:</b></div>
         <li style = {{ display: recipe.ingredients ? '' : 'none' }} ><i className = 'instructions'>{recipe.ingredients}</i></li>
         <li style = {{ display: recipe.ingredients1 ? '' : 'none' }} ><i className = 'instructions'>{recipe.ingredients1}</i></li>
         <li style = {{ display: recipe.ingredients2 ? '' : 'none' }} ><i className = 'instructions'>{recipe.ingredients2}</i></li>
         <li style = {{ display: recipe.ingredients3 ? '' : 'none' }} ><i className = 'instructions'>{recipe.ingredients3}</i></li>
         <li style = {{ display: recipe.ingredients4 ? '' : 'none' }} ><i className = 'instructions'>{recipe.ingredients4}</i></li>
         <li style = {{ display: recipe.ingredients5 ? '' : 'none' }} ><i className = 'instructions'>{recipe.ingredients5}</i></li>
         <li style = {{ display: recipe.ingredients6 ? '' : 'none' }} ><i className = 'instructions'>{recipe.ingredients6}</i></li>
         <li style = {{ display: recipe.ingredients7 ? '' : 'none' }} ><i className = 'instructions'>{recipe.ingredients7}</i></li>
         <li style = {{ display: recipe.ingredients8 ? '' : 'none' }} ><i className = 'instructions'>{recipe.ingredients8}</i></li>
         <li style = {{ display: recipe.ingredients9 ? '' : 'none' }} ><i className = 'instructions'>{recipe.ingredients9}</i></li>
         <li style = {{ display: recipe.ingredients10 ? '' : 'none' }} ><i className = 'instructions'>{recipe.ingredients10}</i></li>
       </div>
       <div className = 'instruction-container' style={{ width: "30rem" }} className = 'description card'>
         <div style = {{ fontSize: '1.5rem' }} ><b>Instructions:</b></div>
         <li style = {{ display: recipe.instruction ? '' : 'none' }} ><i className = 'instructions'>{recipe.instruction}</i></li>
         <li style = {{ display: recipe.instruction1 ? '' : 'none' }} ><i className = 'instructions'>{recipe.instruction1}</i></li>
         <li style = {{ display: recipe.instruction2 ? '' : 'none' }} ><i className = 'instructions'>{recipe.instruction2}</i></li>
         <li style = {{ display: recipe.instruction3 ? '' : 'none' }} ><i className = 'instructions'>{recipe.instruction3}</i></li>
         <li style = {{ display: recipe.instruction4 ? '' : 'none' }} ><i className = 'instructions'>{recipe.instruction4}</i></li>
         <li style = {{ display: recipe.instruction5 ? '' : 'none' }} ><i className = 'instructions'>{recipe.instruction5}</i></li>
         <li style = {{ display: recipe.instruction6 ? '' : 'none' }} ><i className = 'instructions'>{recipe.instruction6}</i></li>
         <li style = {{ display: recipe.instruction7 ? '' : 'none' }} ><i className = 'instructions'>{recipe.instruction7}</i></li>
         <li style = {{ display: recipe.instruction8 ? '' : 'none' }} ><i className = 'instructions'>{recipe.instruction8}</i></li>
         <li style = {{ display: recipe.instruction9 ? '' : 'none' }} ><i className = 'instructions'>{recipe.instruction9}</i></li>
         <li style = {{ display: recipe.instruction10 ? '' : 'none' }} ><i className = 'instructions'>{recipe.instruction10}</i></li>
       </div>
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
             <div className="form-group">
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
