import * as types from '../types';

const initialState = {
  loading: false,
  error: null,
  recipe: null,
  recipes: null,
  results: null,
  keyword: '',
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.RECIPE_LIST_REQUEST:
      return { ...state, loading: true};
    case types.RECIPE_LIST_SUCCESS:
      return { ...state, loading: false, recipes: action.payload };
    case types.RECIPE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case types.RECIPE_SEARCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.RECIPE_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload
      };
    case types.RECIPE_SEARCH_CLEAR:
      return {
        ...state,
        loading: false,
        results: null
      };
    case types.RECIPE_SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case types.SET_RECIPE_SEARCH_KEYWORD:
      return {
        ...state, results: null, keyword: action.payload
      };

    case types.RECIPE_LIST_MRATE_REQUEST:
      return { ...state, loading: true};
    case types.RECIPE_LIST_MRATE_SUCCESS:
      return { ...state, loading: false, recipes: action.payload };
    case types.RECIPE_LIST_MRATE_FAIL:
      return { ...state, loading: false, error: action.payload };

    case types.RECIPE_LIST_ALL_REQUEST:
      return { ...state, loading: true};
    case types.RECIPE_LIST_ALL_SUCCESS:
      return { ...state, loading: false, recipes: action.payload };
    case types.RECIPE_LIST_ALL_FAIL:
      return { ...state, loading: false, error: action.payload };

    case types.RECIPE_ADD_REQUEST:
      return { ...state, loading: true};
    case types.RECIPE_ADD_SUCCESS:
      return { ...state, loading: false, success: true, recipe: action.payload };
    case types.RECIPE_ADD_FAIL:
      return { ...state, loading: false, success: false, error: action.payload };

    case types.RECIPE_DETAIL_REQUEST:
      return { ...state, loading: true};
    case types.RECIPE_DETAIL_SUCCESS:
      return { ...state, loading: false, recipe: action.payload };
    case types.RECIPE_DETAIL_FAIL:
      return { ...state, loading: false, error: action.payload };

   case types.RECIPE_REVIEWS_ADD_REQUEST:
     return { ...state,  loading: true };
   case types.RECIPE_REVIEWS_ADD_SUCCESS:
     return { ...state,  loading: false, review: action.payload, success: true };
   case types.RECIPE_REVIEWS_ADD_FAIL:
     return { ...state,  loading: false, errror: action.payload };
   case types.RECIPE_REVIEWS_ADD_RESET:
     return state;

    default:
      return state;
  }
}


export default reducer;
