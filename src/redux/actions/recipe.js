import axios from 'axios';
import * as types from '../types';

export const listRecipes = ( sortBy = 'createdAt', order = 'desc', limit = 6  ) => async (dispatch) => {
  try{
    dispatch({type: types.RECIPE_LIST_REQUEST});
    const { data } = await axios.get(
    '/recipe/sort?sortBy=' + sortBy + '&order=' + order + '&limit=' + limit
);
    dispatch({type: types.RECIPE_LIST_SUCCESS, payload: data});
  }
  catch(error){
    dispatch({type: types.RECIPE_LIST_FAIL, payload: error.message})
  }
}

export const listRateRecipes = ( sortBy = 'finalRating', order = 'desc', limit = 6  ) => async (dispatch) => {
  try{
    dispatch({type: types.RECIPE_LIST_MRATE_REQUEST});
    const { data } = await axios.get(
    '/recipe/sort?sortBy=' + sortBy + '&order=' + order + '&limit=' + limit
);
    dispatch({type: types.RECIPE_LIST_MRATE_SUCCESS, payload: data});
  }
  catch(error){
    dispatch({type: types.RECIPE_LIST_MRATE_FAIL, payload: error.message})
  }
}

export const listAllRecipes = (pageIndex = '', pageSize = '' ) => async (dispatch) => {
  try{
    dispatch({type: types.RECIPE_LIST_ALL_REQUEST});
    const { data } = await axios.get(
    '/recipe?pageIndex=' + pageIndex + '&pageSize=' + pageSize
     );
    dispatch({type: types.RECIPE_LIST_ALL_SUCCESS, payload: data});
    return data
  }
  catch(error){
    dispatch({type: types.RECIPE_LIST_ALL_FAIL, payload: error.message})
  }
}

export const listSearchRecipes = (searchKeyword = '', pageIndex = '', pageSize = '' ) => async (dispatch) => {
  try{
    dispatch({type: types.RECIPE_SEARCH_REQUEST});
    const { data } = await axios.get(
    '/recipe?name='+ searchKeyword + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize
     );
    dispatch({type: types.RECIPE_SEARCH_SUCCESS, payload: data});
    return data
  }
  catch(error){
    dispatch({type: types.RECIPE_SEARCH_FAIL, payload: error.message})
  }
}

export const addRecipe = (payload) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.RECIPE_ADD_REQUEST, payload: { payload } });
    const { userSignin: { user }, } = getState();
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
    const { userSignin: { user }, userRegister: { userInfo } } = getState();
    dispatch({ type: types.RECIPE_REVIEWS_ADD_REQUEST, payload: review });
    if(user) {
      const { data } = await axios.post(
        `/recipe/reviews/${recipeId}`, review, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
      dispatch({ type: types.RECIPE_REVIEWS_ADD_SUCCESS, payload: data });
    } else {
      const { data } = await axios.post(
        `/recipe/reviews/${recipeId}`, review, {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        });
      dispatch({ type: types.RECIPE_REVIEWS_ADD_SUCCESS, payload: data });
    }
  } catch (error) {
    // report error
    dispatch({ type: types.RECIPE_REVIEWS_ADD_FAIL, payload: error.message });
  }
};
