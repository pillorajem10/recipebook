import axios from 'axios';
import {
  RECIPE_LIST_REQUEST,
  RECIPE_LIST_SUCCESS,
  RECIPE_LIST_FAIL,
  RECIPE_DETAIL_REQUEST,
  RECIPE_DETAIL_SUCCESS,
  RECIPE_DETAIL_FAIL
}
from '../types';

const listRecipes = () => async (dispatch) => {
  try{
    dispatch({type: RECIPE_LIST_REQUEST});
    const {data} = await axios.get('/recipe');
    dispatch({type: RECIPE_LIST_SUCCESS, payload: data});
  }
  catch(error){
    dispatch({type: RECIPE_LIST_FAIL, payload: error.message})
  }
}

const detailsRecipe = (recipeById) => async (dispatch) => {
  try {
    dispatch({type: RECIPE_DETAIL_REQUEST, payload: recipeById});
    const {data} = await axios.get('/recipe/get/' + recipeById);
    dispatch({type: RECIPE_DETAIL_SUCCESS, payload: data});
  }
  catch(error){
    dispatch({type: RECIPE_DETAIL_FAIL, payload: error.message});
  }
}



export { listRecipes, detailsRecipe }
