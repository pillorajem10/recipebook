import axios from 'axios';
import {
  CATEGORY_ADD_REQUEST,
  CATEGORY_ADD_SUCCESS,
  CATEGORY_ADD_FAIL
}
from '../types';

const addCategory = (name) => async (dispatch, getState) => {
  try {
    dispatch({ type: CATEGORY_ADD_REQUEST, payload: { name } });
    const { userSignin: { user }, } = getState();
    const { data } = await axios.post('/category/create/' + user._id, { name });
    dispatch({ type: CATEGORY_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({type: CATEGORY_ADD_FAIL, payload: error.message});
  }
}
