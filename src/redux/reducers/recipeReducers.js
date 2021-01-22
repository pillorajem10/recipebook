import * as type from '../types'

const recipeListReducer = (state = {recipes: [] }, action) => {
  switch(action.type){
    case type.RECIPE_LIST_REQUEST:
      return {loading: true};
    case type.RECIPE_LIST_SUCCESS:
      return {loading: false, recipes: action.payload};
    case type.RECIPE_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

const recipeListRateReducer = (state = {recipes: [] }, action) => {
  switch(action.type){
    case type.RECIPE_LIST_MRATE_REQUEST:
      return {loading: true};
    case type.RECIPE_LIST_MRATE_SUCCESS:
      return {loading: false, recipes: action.payload};
    case type.RECIPE_LIST_MRATE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

const recipeListAllReducer = (state = {recipes: [] }, action) => {
  switch(action.type){
    case type.RECIPE_LIST_ALL_REQUEST:
      return {loading: true};
    case type.RECIPE_LIST_ALL_SUCCESS:
      return {loading: false, recipes: action.payload};
    case type.RECIPE_LIST_ALL_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

const recipeListSearchReducer = (state = {recipes: [] }, action) => {
  switch(action.type){
    case type.RECIPE_SEARCH_REQUEST:
      return {loading: true};
    case type.RECIPE_SEARCH_SUCCESS:
      return {loading: false, recipes: action.payload};
    case type.RECIPE_SEARCH_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

const recipeAddReducer = (state = { recipe: {} }, action) => {
  switch(action.type){
    case type.RECIPE_ADD_REQUEST:
      return {loading: true};
    case type.RECIPE_ADD_SUCCESS:
      return {loading: false, success: true, recipe: action.payload};
    case type.RECIPE_ADD_FAIL:
      return {loading: false, success: false, error: action.payload};
    default:
      return state;
  }
}


const recipeDetailsReducer = (state = {recipe: {} }, action) => {
  switch(action.type){
    case type.RECIPE_DETAIL_REQUEST:
      return {loading: true};
    case type.RECIPE_DETAIL_SUCCESS:
      return {loading: false, recipe: action.payload};
    case type.RECIPE_DETAIL_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

const recipeAddReviewsReducer = (state = {}, action) => {
   switch (action.type)  {
   case type.RECIPE_REVIEWS_ADD_REQUEST:
     return { loading: true };
   case type.RECIPE_REVIEWS_ADD_SUCCESS:
     return { loading: false, review: action.payload, success: true };
   case type.RECIPE_REVIEWS_ADD_FAIL:
     return { loading: false, error: action.payload };
   case type.RECIPE_REVIEWS_ADD_RESET:
     return {};
   default:
     return state;
  }
}

export { recipeListReducer, recipeDetailsReducer, recipeAddReducer, recipeAddReviewsReducer, recipeListAllReducer, recipeListRateReducer, recipeListSearchReducer }
