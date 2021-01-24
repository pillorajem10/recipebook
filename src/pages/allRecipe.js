import React, { useState, useEffect, useCallback } from 'react';

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
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles({
  root: {
    maxHeight: "100%",
    maxWidth: "15rem",
    marginTop: '2rem',
    marginLeft: '.7rem'
  },
  paginator: {
    justifyContent: "center",
    padding: "10px",
    marginTop:'1%',
    backgroundColor: "#FFFFFF",
  }
});

const AllRecipe = ({ location }) => {
  const [recipeList, setRecipeList] = useState([]);
  const [pageDetails, setPageDetails] = useState(null);
  const [pageSize] = useState(10);

  document.title='Recipebook | All Recipes';

  const recipeListAll = useSelector(state => state.recipeListAll);
  const { loading, error } = recipeListAll;

  const dispatch = useDispatch();

  const classes = useStyles();

  const { user } = useSelector((state) => state.userSignin);
  const { userInfo } = useSelector((state) => state.userRegister);

  const handleRecipeList = useCallback(
    (pageIndex = 1) => {
      dispatch(rbook.recipe.listAllRecipes(pageIndex, pageSize))
        .then((data) => {
          if (data) {
            setRecipeList(data.docs);
            setPageDetails({
              pageIndex: data.page,
              pageSize: data.limit,
              totalPages: data.totalPages,
            });
          }
        })
    },
    [dispatch, pageSize],
  );

  useEffect(() => {
    handleRecipeList();
  }, [handleRecipeList]);

  if(!pageDetails) return null;

  const handleChangePageIndex = (event, value) => {
    handleRecipeList(value);
    console.log('valueeeee', value)
  };

  const createBanana = (recipe, idx) => {
    return (
      <Card key={idx} className={classes.root}>
         <CardMedia
           component="img"
           alt={recipe.name}
           height="500"
           image={`/recipe/photo/${recipe._id}`}
           title="Contemplative Reptile"
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="h2">
             {recipe.name}
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             {recipe.description}
           </Typography>
           <Typography style = {{marginTop:'2%'}} variant="body2" color="textSecondary" component="p">
             <Rating readOnly value={recipe.rating}/> <div style = {{fontSize: "1.5rem"}}>{recipe.rating.toFixed(1)}</div>
           </Typography>
           <Typography style = {{marginTop:'2%'}} variant="body2" color="textSecondary" component="p">
             <div style = {{fontSize: "1rem"}}>Number of reviews: {recipe.numReviews}</div>
           </Typography>
         </CardContent>
         <CardActions>
           <Link to = {`/recipe/${recipe._id}`}>
             <Button size="small" color="primary">
               Learn More
             </Button>
           </Link>
         </CardActions>
       </Card>
    );
  };

  return (
    <>
      <center className = 'welcomeTitle'>All recipes</center>
      <div className = 'home-container'>

        {loading && <CircularProgress color = 'dark' className = 'loading' />}
        {error && <div>{error}</div>}

        {recipeList.length === 0 &&
          <div style = {{fontSize: '4rem'}} >No recipes found</div>
        }
        {recipeList.map((recipe, index) => (
          createBanana(recipe, index)
        ))}
      </div>

      <Pagination
        count={pageDetails.totalPages}
        page={pageDetails.pageIndex}
        defaultPage={1}
        color="primary"
        size="large"
        onChange={handleChangePageIndex}
        showFirstButton
        showLastButton
        classes={{ ul: classes.paginator }}
      />
    </>
  )
}

export default AllRecipe;
