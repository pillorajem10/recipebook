import * as type from '../types'

const categoryAddReducer = (state = { category: {} }, action) => {
  switch(action.type){
    case type.CATEGORY_ADD_REQUEST:
      return {loading: true};
    case type.CATEGORY_ADD_SUCCESS:
      return {loading: false, success: true, category: action.payload};
    case type.CATEGORY_ADD_FAIL:
      return {loading: false, success: false, error: action.payload};
    default:
      return state;
  }
}

const categoryListReducer = (state = { categories: [] }, action) => {
  switch(action.type){
    case type.CATEGORY_LIST_REQUEST:
      return {loading: true};
    case type.CATEGORY_LIST_SUCCESS:
      return {loading: false, categories: action.payload};
    case type.CATEGORY_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

export { categoryAddReducer, categoryListReducer }
