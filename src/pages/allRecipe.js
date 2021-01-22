import React, { useEffect } from 'react';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { rbook } from '../redux/combineActions';

//navigation
import { Link } from 'react-router-dom';

//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    maxHeight: "100%",
    maxWidth: "15rem",
    marginTop: '2rem',
    marginLeft: '.7rem'
  },
});

const AllRecipe = ({ location }) => {

  document.title='Recipebook | All Recipes';

  const recipeListAll = useSelector(state => state.recipeListAll);
  const { recipes, loading, error } = recipeListAll;

  const dispatch = useDispatch();

  const classes = useStyles();

  const { user } = useSelector((state) => state.userSignin);
  const { userInfo } = useSelector((state) => state.userRegister);

  const params = new URLSearchParams(location.search);
  const searchKeyword = params.get('keyword');

  useEffect(() => {
    if (searchKeyword === null) {
      dispatch(rbook.recipe.listAllRecipes())
    } else {
      dispatch(rbook.recipe.listAllRecipes(searchKeyword))
    }
  }, []);


  return (
    loading? <CircularProgress color = 'dark' className = 'loading' /> : error? <div>{error}</div> :
    <>
      { userInfo || user ? (
         <>
           <center className = 'welcomeTitle'>All recipes</center>
         </>
       ) : (
      null
      )}
      <div className = 'home-container'>
      { recipes.length > 0 ? (
        <>
          {
           recipes.map( recipes =>
            <Card className={classes.root}>
               <CardMedia
                 component="img"
                 alt={recipes.name}
                 height="500"
                 image={`/recipe/photo/${recipes._id}`}
                 title="Contemplative Reptile"
               />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="h2">
                   {recipes.name}
                 </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                   {recipes.description}
                 </Typography>
                 <Typography style = {{marginTop:'2%'}} variant="body2" color="textSecondary" component="p">
                   <Rating readOnly value={recipes.rating}/> <div style = {{fontSize: "1.5rem"}}>{recipes.rating.toFixed(1)}</div>
                 </Typography>
                 <Typography style = {{marginTop:'2%'}} variant="body2" color="textSecondary" component="p">
                   <div style = {{fontSize: "1rem"}}>Number of reviews: {recipes.numReviews}</div>
                 </Typography>
               </CardContent>
               <CardActions>
                 <Link to = {`/recipe/${recipes._id}`}>
                   <Button size="small" color="primary">
                     Learn More
                   </Button>
                 </Link>
               </CardActions>
             </Card>
            )
           }
         </>
      ) : (
        <div style = {{fontSize: '4rem'}} >No recipes found</div>
      ) }
      </div>
    </>
  )
}

export default AllRecipe;
