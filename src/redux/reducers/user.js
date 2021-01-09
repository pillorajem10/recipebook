import * as types from '../types';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_SIGNUP_REQUEST:
      return { ...state, loading: true };
    case types.USER_SIGNUP_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case types.USER_SIGNUP_FAIL:
      return { ...state, loading: false, error: action.payload };

    case types.USER_SIGNIN_REQUEST:
      return { ...state, loading: true };
    case types.USER_SIGNIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case types.USER_SIGNIN_FAIL:
      return { ...state, loading: false, error:action.payload };
    case types.USER_SIGNOUT:
      return { ...state, loading: false, user: null };

    default: return state;
  }
}

export default reducer;
