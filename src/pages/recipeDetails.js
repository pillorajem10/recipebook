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
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

//styling for material-ui
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
    '& label.Mui-focused': {
      color: '#FF3F16',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#FF3F16',
        },
    },
  },
}));

const RecipeDetails = (props) => {
  const {recipe, loading, error} = useSelector(state => state.recipeDetails);

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const { user } = useSelector((state) => state.userSignin);
  const { userInfo } = useSelector((state) => state.userRegister);
  const { success: recipeReviewSave } = useSelector((state) => state.addReview);

  const dispatch = useDispatch();
  const classes = useStyles();

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

if(!recipe) return null
if(!recipe.reviews) return null

  return (
    loading? <center className='loading1' ><CircularProgress color = 'dark' /></center> : error? <div>{error}</div> :
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
     <div key={recipe.name} className = 'details-container'>
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
     <div className="reviews">
       <div className = 'reviewsTitle'>Rate this recipe</div>
       <Rating
         name="rating"
         id='rating'
         value={rating}
         onChange={(event, newValue) => {
           setRating(newValue);
         }}
       />
     </div>
     {userInfo || user ? (
       <>
       <div className = 'reviews'>
         <div className = 'reviewsTitle'>Write a comment here</div>
         <form className = 'form-container' onSubmit = {submitHandler}>
           <div class="form-group">
             <FormControl className={(classes.margin, classes.textField)}>
               <TextField
                 id="comment"
                 label="Comment"
                 multiline
                 name="comment"
                 onChange={(e) => setComment(e.target.value)}
                 variant="outlined"
                 rows={4}
               />
             </FormControl>
           </div>
           <Button variant="contained" type="submit">Comment</Button>
         </form>
       </div>
       </>
     ) : (
       <div>
         Please <Link to="/">Sign-in</Link> to write a reviews.
       </div>
     )}
     <hr/>
     <div className="reviews" >
       <div className = 'reviewsTitle'>Reviews</div>
       {recipe.reviews.length > 0 ? (
         <div>
           {recipe.reviews && recipe.reviews
             .map((review) => (
              <>
             <div style={{marginTop:'2.5rem'}} key={review._id}>
               { review.userRole === 1 ? (
                 <b style = {{ fontSize: '1.1rem' }} >{review.name} (Admin)</b>
               ) : (
                 <b style = {{ fontSize: '1.1rem' }} >{review.name}</b>
               ) }
               <div><Rating precision={.1} readOnly value={review.rating}/></div>
               <div style = {{ fontSize: '1rem' }} >{review.comment}</div>
             </div>
             </>
           ))}
         </div>
       ) : (
         <h3>
          There are no reviews in this recipe. Write the first one
         </h3>
       )}
     </div>
    </>
  )
}

export default RecipeDetails;
