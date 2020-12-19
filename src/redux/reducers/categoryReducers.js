import {
  CATEGORY_ADD_REQUEST,
  CATEGORY_ADD_SUCCESS,
  CATEGORY_ADD_FAIL,
}
from '../types';

const categoryAddReducer = (state = { category: {} }, action) => {
  switch(action.type){
    case CATEGORY_ADD_REQUEST:
      return {loading: true};
    case CATEGORY_ADD_SUCCESS:
      return {loading: false, success: true, category: action.payload};
    case CATEGORY_ADD_FAIL:
      return {loading: false, success: false, error: action.payload};
    default:
      return state;
  }
}
 export { categoryAddReducer }
