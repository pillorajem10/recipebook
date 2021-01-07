import axios from 'axios';
import {
  //RECIPE_LIST_REQUEST,
  //RECIPE_LIST_SUCCESS,
  //RECIPE_LIST_FAIL,
  RECIPE_DETAIL_REQUEST,
  RECIPE_DETAIL_SUCCESS,
  RECIPE_DETAIL_FAIL,
  RECIPE_ADD_REQUEST,
  RECIPE_ADD_SUCCESS,
  RECIPE_ADD_FAIL,
  RECIPE_REVIEWS_ADD_REQUEST,
  RECIPE_REVIEWS_ADD_SUCCESS,
  RECIPE_REVIEWS_ADD_FAIL,
  RECIPE_LIST_ALL_REQUEST,
  RECIPE_LIST_ALL_SUCCESS,
  RECIPE_LIST_ALL_FAIL,
  RECIPE_LIST_MRATE_REQUEST,
  RECIPE_LIST_MRATE_SUCCESS,
  RECIPE_LIST_MRATE_FAIL,
  RECIPE_SEARCH_REQUEST,
  RECIPE_SEARCH_SUCCESS,
  RECIPE_SEARCH_FAIL
}
from '../types';

/*const listRecipes = ( sortBy = 'createdAt', limit = 4, order = 'desc' ) => async (dispatch) => {
  try{
    dispatch({type: RECIPE_LIST_REQUEST});
    const { data } = await axios.get(
    '/recipe?limit=' + limit
);
    dispatch({type: RECIPE_LIST_SUCCESS, payload: data});
  }
  catch(error){
    dispatch({type: RECIPE_LIST_FAIL, payload: error.message})
  }
}*/

const listRateRecipes = ( sortBy = 'finalRating', limit = 4, order = 'desc' ) => async (dispatch) => {
  try{
    dispatch({type: RECIPE_LIST_MRATE_REQUEST});
    const { data } = await axios.get(
    '/recipe?limit=' + limit + '&sortBy=' + sortBy + '&order=' + order
);
    dispatch({type: RECIPE_LIST_MRATE_SUCCESS, payload: data});
  }
  catch(error){
    dispatch({type: RECIPE_LIST_MRATE_FAIL, payload: error.message})
  }
}

const listSearchRecipes = ( searchKeyword = '' ) => async (dispatch) => {
  try{
    dispatch({type: RECIPE_SEARCH_REQUEST});
    const { data } = await axios.get(
    '/recipe/search?searchKeyword=' + searchKeyword
    );
    console.log('RESULTS', data);
    dispatch({type: RECIPE_SEARCH_SUCCESS, payload: data});
  }
  catch(error){
    dispatch({type: RECIPE_SEARCH_FAIL, payload: error.message})
  }
}

const listAllRecipes = ( sortBy = 'createdAt', order = 'desc' ) => async (dispatch) => {
  try{
    dispatch({type: RECIPE_LIST_ALL_REQUEST});
    const { data } = await axios.get(
    '/recipe?sortBy=' + sortBy + '&order=' + order
);
    dispatch({type: RECIPE_LIST_ALL_SUCCESS, payload: data});
  }
  catch(error){
    dispatch({type: RECIPE_LIST_ALL_FAIL, payload: error.message})
  }
}

const addRecipe = (
  name,
  description,
  category,
  ingredients,
  ingredients1,
  ingredients2,
  ingredients3,
  ingredients4,
  ingredients5,
  ingredients6,
  ingredients7,
  ingredients8,
  ingredients9,
  ingredients10,
  instruction,
  instruction1,
  instruction2,
  instruction3,
  instruction4,
  instruction5,
  instruction6,
  instruction7,
  instruction8,
  instruction9,
  instruction10,
  photo,
  photo1
) => async (dispatch, getState) => {
  try {
    dispatch({ type: RECIPE_ADD_REQUEST, payload: {
      name,
      description,
      category,
      ingredients,
      ingredients1,
      ingredients2,
      ingredients3,
      ingredients4,
      ingredients5,
      ingredients6,
      ingredients7,
      ingredients8,
      ingredients9,
      ingredients10,
      instruction,
      instruction1,
      instruction2,
      instruction3,
      instruction4,
      instruction5,
      instruction6,
      instruction7,
      instruction8,
      instruction9,
      instruction10,
      photo,
      photo1
     } });
    const { userSignin: { user }, } = getState();
    const bodyFormData = new FormData();
    bodyFormData.append('name', name);
    bodyFormData.append('description', description);
    bodyFormData.append('category', category);
    bodyFormData.append('ingredients', ingredients);
    bodyFormData.append('ingredients1', ingredients1);
    bodyFormData.append('ingredients2', ingredients2);
    bodyFormData.append('ingredients3', ingredients3);
    bodyFormData.append('ingredients4', ingredients4);
    bodyFormData.append('ingredients5', ingredients5);
    bodyFormData.append('ingredients6', ingredients6);
    bodyFormData.append('ingredients7', ingredients7);
    bodyFormData.append('ingredients8', ingredients8);
    bodyFormData.append('ingredients9', ingredients9);
    bodyFormData.append('ingredients10', ingredients10);
    bodyFormData.append('instruction', instruction);
    bodyFormData.append('instruction1', instruction1);
    bodyFormData.append('instruction2', instruction2);
    bodyFormData.append('instruction3', instruction3);
    bodyFormData.append('instruction4', instruction4);
    bodyFormData.append('instruction5', instruction5);
    bodyFormData.append('instruction6', instruction6);
    bodyFormData.append('instruction7', instruction7);
    bodyFormData.append('instruction8', instruction8);
    bodyFormData.append('instruction9', instruction9);
    bodyFormData.append('instruction10', instruction10);
    bodyFormData.append('photo', photo);
    bodyFormData.append('photo1', photo1);
    const { data } = await axios.post(`/recipe/create/${user._id}`,  bodyFormData, {
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'multipart/form-data',
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

const saveRecipeReview = (recipeId, review) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {
        user: { token },
      },
    } = getState();
    dispatch({ type: RECIPE_REVIEWS_ADD_REQUEST, payload: review });
    const { data } = await axios.post(
      `/recipe/reviews/${recipeId}`,
      review,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    dispatch({ type: RECIPE_REVIEWS_ADD_SUCCESS, payload: data });
  } catch (error) {
    // report error
    dispatch({ type: RECIPE_REVIEWS_ADD_FAIL, payload: error.message });
  }
};



export {
  /*listRecipes,*/
  detailsRecipe,
  addRecipe,
  saveRecipeReview,
  listAllRecipes,
  listRateRecipes,
  listSearchRecipes
}
