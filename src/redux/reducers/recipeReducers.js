import {
  RECIPE_LIST_REQUEST,
  RECIPE_LIST_SUCCESS,
  RECIPE_LIST_FAIL,
  RECIPE_DETAIL_REQUEST,
  RECIPE_DETAIL_SUCCESS,
  RECIPE_DETAIL_FAIL,
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

export { recipeListReducer, recipeDetailsReducer }
