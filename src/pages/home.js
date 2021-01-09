import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { rbook } from '../redux/combineActions';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  root: {
    maxHeight: "100%",
    maxWidth: "32rem",
    marginTop: '2rem'
  },
});

const Home = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { recipes, loading, error } = useSelector(state => state.rbook.recipe);
  const { user } = useSelector((state) => {
    console.log('[HOME] ', state);
    return state.rbook.user
  });

  useEffect(() => {
    dispatch(rbook.recipe.listRateRecipes());
    return () => {
      console.log('[GG HOME]');
      dispatch(rbook.recipe.setSearchKeyword(''));
    };
  }, []);

  return (
    loading? <CircularProgress color = 'dark' className = 'loading' /> : error? <div>{error}</div> :
    <>
      {user ? (
         <>
           <center className = 'welcomeTitle'>Here our most popular recipes</center>
         </>
       ) : (
      null
      )}
      <div className = 'container'>
      { recipes && recipes.length > 0 ? (
        <>
          {
           recipes.map( recipes =>
            <Card data-aos = 'fade-up' className={classes.root}>
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
                   <Rating readOnly value={recipes.finalRating}/> <div style = {{fontSize: "1.5rem"}}>{recipes.rating.toFixed(1)}</div>
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
      <center>
        <Button style = {{marginTop:'3%'}} variant="contained" color="primary" href="/recipes">
          View All recipes
        </Button>
      </center>
    </>
  )
}

export default Home;
