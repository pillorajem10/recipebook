import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { recipeListReducer, recipeDetailsReducer } from './reducers/recipeReducers';
import { userRegisterReducer, userLoginReducer } from './reducers/userReducers';
import Cookie from 'js-cookie';

const user = localStorage.getItem('jwt') && Cookie.getJSON('user') || null;

const initialState = {
  userSignin: { user },
};

const reducer = combineReducers({
  recipeList: recipeListReducer,
  recipeDetails: recipeDetailsReducer,
  userRegister: userRegisterReducer,
  userSignin: userLoginReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
