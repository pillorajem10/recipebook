import axios from 'axios';
import * as types from '../types';

/*const listRecipes = ( sortBy = 'createdAt', limit = 4, order = 'desc' ) => async (dispatch) => {
  try{
    dispatch({type: types.RECIPE_LIST_REQUEST});
    const { data } = await axios.get(
    '/recipe?limit=' + limit
);
    dispatch({type: types.RECIPE_LIST_SUCCESS, payload: data});
  }
  catch(error){
    dispatch({type: types.RECIPE_LIST_FAIL, payload: error.message})
  }
}*/

export const listRateRecipes = ( sortBy = 'finalRating', limit = 4, order = 'desc' ) => async (dispatch) => {
  try{
    dispatch({type: types.RECIPE_LIST_MRATE_REQUEST});
    const { data } = await axios.get(
    '/recipe?limit=' + limit + '&sortBy=' + sortBy + '&order=' + order
);
    dispatch({type: types.RECIPE_LIST_MRATE_SUCCESS, payload: data});
  }
  catch(error){
    dispatch({type: types.RECIPE_LIST_MRATE_FAIL, payload: error.message})
  }
}

export const setSearchKeyword = (payload) => async (dispatch) => {
  dispatch({
    type: types.SET_RECIPE_SEARCH_KEYWORD,
    payload,
  });
};

export const listSearchRecipes = ( searchKeyword = '' ) => async (dispatch) => {
  try {
    dispatch({ type: types.RECIPE_SEARCH_REQUEST });
    dispatch({
      type: types.SET_RECIPE_SEARCH_KEYWORD,
      payload: searchKeyword,
    });
    const res = await axios.get(`/recipe/search?searchKeyword=${searchKeyword}`);
    dispatch({
      type: types.RECIPE_SEARCH_SUCCESS,
      payload: res.data,
    });
  }
  catch(error){
    dispatch({
      type: types.RECIPE_SEARCH_FAIL,
      payload: error.message
    });
  }
}

export const listAllRecipes = ( sortBy = 'createdAt', order = 'desc' ) => async (dispatch) => {
  try{
    dispatch({type: types.RECIPE_LIST_ALL_REQUEST});
    const { data } = await axios.get(
    '/recipe?sortBy=' + sortBy + '&order=' + order
);
    dispatch({type: types.RECIPE_LIST_ALL_SUCCESS, payload: data});
  }
  catch(error){
    dispatch({type: types.RECIPE_LIST_ALL_FAIL, payload: error.message})
  }
}

export const addRecipe = (payload) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.RECIPE_ADD_REQUEST, payload });
    const { rbook } = getState();
    const { user: { user }, } = rbook;
    const bodyFormData = new FormData();

    Object.keys(payload).map(fld => {
      bodyFormData.append(fld, payload[fld]);
      return fld;
    });
    
    const { data } = await axios.post(`/recipe/create/${user._id}`,  bodyFormData, {
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({ type: types.RECIPE_ADD_SUCCESS, payload: data });
  } catch (error) {
    console.log(error)
    dispatch({type: types.RECIPE_ADD_FAIL, payload: error.response.data.error });
  }
}

export const detailsRecipe = (recipeById) => async (dispatch) => {
  try {
    dispatch({type: types.RECIPE_DETAIL_REQUEST, payload: recipeById});
    const {data} = await axios.get('/recipe/get/' + recipeById);
    dispatch({type: types.RECIPE_DETAIL_SUCCESS, payload: data});
  }
  catch(error){
    dispatch({type: types.RECIPE_DETAIL_FAIL, payload: error.message});
  }
}

export const saveRecipeReview = (recipeId, review) => async (dispatch, getState) => {
  try {
    const { rbook } = getState();
    const { user: { user }} = rbook;
    dispatch({ type: types.RECIPE_REVIEWS_ADD_REQUEST, payload: review });
    const { data } = await axios.post(
      `/recipe/reviews/${recipeId}`,
      review,
      {
        headers: {
          Authorization: 'Bearer ' + user.token,
        },
      }
    );
    dispatch({ type: types.RECIPE_REVIEWS_ADD_SUCCESS, payload: data });
  } catch (error) {
    // report error
    dispatch({ type: types.RECIPE_REVIEWS_ADD_FAIL, payload: error.message });
  }
};
