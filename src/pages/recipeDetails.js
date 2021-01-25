import React, { useEffect, useState } from 'react';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { rbook } from '../redux/combineActions';

//navigation
import { Link } from 'react-router-dom';

//material-ui
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paginator: {
    justifyContent: "center",
    padding: "10px",
    marginTop:'1%',
    backgroundColor: "#FFFFFF",
  }
});

const RecipeDetails = (props) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [commentsPerPage] = useState(3);
  const [page, setPage] = useState(1);

  const {recipe, loading, error} = useSelector(state => state.recipeDetails);
  const { user } = useSelector((state) => state.userSignin);
  const { userInfo } = useSelector((state) => state.userRegister);
  const { success: recipeReviewSave } = useSelector((state) => state.addReview);

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (recipeReviewSave) {
      setComment('');
      setRating(0);
    }
    dispatch(rbook.recipe.detailsRecipe(props.match.params.id));
    return () => {
      //
    };
  }, [recipeReviewSave]);

  const submitHandler = (e) => {
  e.preventDefault();
  if(user) {
    dispatch(
      rbook.recipe.saveRecipeReview(props.match.params.id, {
        name: user.name,
        rating: rating,
        comment: comment,
        userRole: user.role
      })
    );
  } else {
    dispatch(
      rbook.recipe.saveRecipeReview(props.match.params.id, {
        name: userInfo.name,
        rating: rating,
        comment: comment,
        userRole: userInfo.role
      })
    );
  }
  setOpenSnackBar(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
    setOpenSnackBar(false);
};

const showSuccess = () => (
  <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={openSnackBar} autoHideDuration={3000} onClose={handleClose}>
    <Alert severity="success">Comment added</Alert>
  </Snackbar>
);


  return (
    loading? <CircularProgress color = 'dark' className = 'loading1' /> : error? <div>{error}</div> :
    <>
    {recipeReviewSave && showSuccess()}
    {
      recipe.name === undefined ? (
        <div style = {{display: 'none'}}>loading</div>
      ) : (
        <div style = {{display: 'none'}}>{document.title=recipe.name}</div>
      )
    }
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
       <div className = 'instruction-container' style={{ width: "30rem", marginTop: '1%' }} className = 'description card'>
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
       <div className = 'instruction-container' style={{ width: "30rem", marginTop: '1%' }} className = 'description card'>
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
     <center className = 'welcomeTitle'>Rate this recipe</center>
     <center><Rating
       name="rating"
       id='rating'
       value={rating}
       onChange={(event, newValue) => {
         setRating(newValue);
       }}
     />
     <hr/></center>
     <center className = 'welcomeTitle'>Write a comment here</center>
     {userInfo || user ? (
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
     <hr/>
     <center>
       <center className = 'welcomeTitle'>Reviews</center>
       {recipe.reviews && recipe.reviews.length > 0 ? (
         <div>
           {recipe.reviews && recipe.reviews
             .slice((page - 1) * commentsPerPage, page * commentsPerPage)
             .map((review) => (
             <div key={review._id}>
               { review.userRole === 1 ? (
                 <b style = {{ fontSize: '1.2rem' }} >{review.name} (Admin)</b>
               ) : (
                 <b style = {{ fontSize: '1.2rem' }} >{review.name}</b>
               ) }
               <div><Rating readOnly value={review.rating}/></div>
               <div style = {{ fontSize: '1.5rem' }} >{review.comment}</div>
             </div>
           ))}
           {
             recipe.reviews.length <= commentsPerPage ? (
               null
             ) : (
               <Pagination
                 count={Math.ceil(recipe.reviews.length / commentsPerPage)}
                 page={page}
                 onChange={handleChange}
                 defaultPage={1}
                 color="primary"
                 size="large"
                 showFirstButton
                 showLastButton
                 classes={{ ul: classes.paginator }}
               />
             )
           }
         </div>
       ) : (
         <h3>
          There are no reviews in this recipe. Write the first one
         </h3>
       )}
     </center>
    </>
  )
}

export default RecipeDetails;
