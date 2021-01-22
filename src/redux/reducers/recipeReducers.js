import {
  RECIPE_LIST_REQUEST,
  RECIPE_LIST_SUCCESS,
  RECIPE_LIST_FAIL,
  RECIPE_DETAIL_REQUEST,
  RECIPE_DETAIL_SUCCESS,
  RECIPE_DETAIL_FAIL,
  RECIPE_ADD_REQUEST,
  RECIPE_ADD_SUCCESS,
  RECIPE_ADD_FAIL,
  RECIPE_REVIEWS_ADD_REQUEST,
  RECIPE_REVIEWS_ADD_SUCCESS,
  RECIPE_REVIEWS_ADD_FAIL,
  RECIPE_REVIEWS_ADD_RESET,
  RECIPE_LIST_ALL_REQUEST,
  RECIPE_LIST_ALL_SUCCESS,
  RECIPE_LIST_ALL_FAIL,
  RECIPE_LIST_MRATE_REQUEST,
  RECIPE_LIST_MRATE_SUCCESS,
  RECIPE_LIST_MRATE_FAIL
}
from '../types';

const recipeListReducer = (state = {recipes: [] }, action) => {
  switch(action.type){
    case RECIPE_LIST_REQUEST:
      return {loading: true};
    case RECIPE_LIST_SUCCESS:
      return {loading: false, recipes: action.payload};
    case RECIPE_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

const recipeListRateReducer = (state = {recipes: [] }, action) => {
  switch(action.type){
    case RECIPE_LIST_MRATE_REQUEST:
      return {loading: true};
    case RECIPE_LIST_MRATE_SUCCESS:
      return {loading: false, recipes: action.payload};
    case RECIPE_LIST_MRATE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

const recipeListAllReducer = (state = {recipes: [] }, action) => {
  switch(action.type){
    case RECIPE_LIST_ALL_REQUEST:
      return {loading: true};
    case RECIPE_LIST_ALL_SUCCESS:
      return {loading: false, recipes: action.payload};
    case RECIPE_LIST_ALL_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

const recipeAddReducer = (state = { recipe: {} }, action) => {
  switch(action.type){
    case RECIPE_ADD_REQUEST:
      return {loading: true};
    case RECIPE_ADD_SUCCESS:
      return {loading: false, success: true, recipe: action.payload};
    case RECIPE_ADD_FAIL:
      return {loading: false, success: false, error: action.payload};
    default:
      return state;
  }
}


const recipeDetailsReducer = (state = {recipe: {} }, action) => {
  switch(action.type){
    case RECIPE_DETAIL_REQUEST:
      return {loading: true};
    case RECIPE_DETAIL_SUCCESS:
      return {loading: false, recipe: action.payload};
    case RECIPE_DETAIL_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

const recipeAddReviewsReducer = (state = {}, action) => {
   switch (action.type)  {
   case RECIPE_REVIEWS_ADD_REQUEST:
     return { loading: true };
   case RECIPE_REVIEWS_ADD_SUCCESS:
     return { loading: false, review: action.payload, success: true };
   case RECIPE_REVIEWS_ADD_FAIL:
     return { loading: false, error: action.payload };
   case RECIPE_REVIEWS_ADD_RESET:
     return {};
   default:
     return state;
  }
}

export { recipeListReducer, recipeDetailsReducer, recipeAddReducer, recipeAddReviewsReducer, recipeListAllReducer, recipeListRateReducer }
