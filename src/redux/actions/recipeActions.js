import axios from 'axios';
import {
  RECIPE_LIST_REQUEST,
  RECIPE_LIST_SUCCESS,
  RECIPE_LIST_FAIL,
  RECIPE_DETAIL_REQUEST,
  RECIPE_DETAIL_SUCCESS,
  RECIPE_DETAIL_FAIL,
  RECIPE_ADD_REQUEST,
  RECIPE_ADD_SUCCESS,
  RECIPE_ADD_FAIL
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

const addRecipe = (name) => async (dispatch, getState) => {
  try {
    dispatch({ type: RECIPE_ADD_REQUEST, payload: { name } });
    const { userSignin: { user }, } = getState();
    const { data } = await axios.post('/recipe/create/' + user._id,  { name }, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    dispatch({ type: RECIPE_ADD_SUCCESS, payload: data });
  } catch (error) {
    console.log(error)
    dispatch({type: RECIPE_ADD_FAIL, payload: error.response.data.error });
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



export { listRecipes, detailsRecipe, addRecipe }
