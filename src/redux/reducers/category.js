import * as types from '../types';

const initialState = {
  loading: false,
  error: null,
  category: null,
  categories: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.CATEGORY_ADD_REQUEST:
      return { ...state, loading: true };
    case types.CATEGORY_ADD_SUCCESS:
      return { ...state, loading: false, category: action.payload };
    case types.CATEGORY_ADD_FAIL:
      return { ...state, loading: false, error: action.payload };

    case types.CATEGORY_LIST_REQUEST:
      return { ...state, loading: true };
    case types.CATEGORY_LIST_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case types.CATEGORY_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export default reducer;
