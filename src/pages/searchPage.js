import React, { useState, useEffect, useCallback } from 'react';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { rbook } from '../redux/combineActions';

//navigation
import { Link, useHistory } from 'react-router-dom';

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

const SearchPage = ({ location }) => {
  const [recipeList, setRecipeList] = useState([]);
  const [pageDetails, setPageDetails] = useState(null);
  const [pageSize] = useState(5);

  document.title='Recipebook | Searched Recipes';

  const { loading, error } = useSelector(state => state.recipeSearch);

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const { user } = useSelector((state) => state.userSignin);
  const { userInfo } = useSelector((state) => state.userRegister);

  const params = new URLSearchParams(location.search);
  const searchKeyword = params.get('keyword');

  const handleRecipeList = useCallback(
    (pageIndex = 1) => {
      dispatch(rbook.recipe.listSearchRecipes(searchKeyword, pageIndex, pageSize))
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
    [dispatch, pageSize, searchKeyword],
  );

  useEffect(() => {
    if(searchKeyword === null || !searchKeyword){
      history.push('/recipes')
    } else {
      handleRecipeList();
    }
  }, [handleRecipeList]);

  if(!pageDetails) return null;

  const handleChangePageIndex = (event, value) => {
    handleRecipeList(value);
  };

  return (
    loading? <CircularProgress color = 'dark' className = 'loading' /> : error? <div>{error}</div> :
    <>
      { userInfo || user ? (
         <>
           <center className = 'welcomeTitle'>Searched recipes</center>
         </>
       ) : (
      null
      )}
      <div className = 'home-container'>
      { recipeList.length > 0 ? (
        <>
          {
           recipeList.map( recipes =>
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
      { recipeList.length < pageSize ? (
       null
      ) : (
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
      ) }
    </>
  )
}

export default SearchPage;
