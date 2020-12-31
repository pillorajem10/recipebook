import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { recipeListReducer, recipeDetailsReducer, recipeAddReducer, recipeAddReviewsReducer, recipeListAllReducer, recipeListRateReducer } from './reducers/recipeReducers';
import { userRegisterReducer, userLoginReducer } from './reducers/userReducers';
import { categoryAddReducer, categoryListReducer } from './reducers/categoryReducers'
import Cookie from 'js-cookie';

const user = localStorage.getItem('jwt') && Cookie.getJSON('user') || null;

const initialState = {
  userSignin: { user },
};

const reducer = combineReducers({
  recipeList: recipeListReducer,
  recipeRate: recipeListRateReducer,
  recipeListAll: recipeListAllReducer,
  recipeDetails: recipeDetailsReducer,
  userRegister: userRegisterReducer,
  userSignin: userLoginReducer,
  addCategory: categoryAddReducer,
  listCategories: categoryListReducer,
  addRecipe: recipeAddReducer,
  addReview: recipeAddReviewsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
