import axios from 'axios';

import {
  CATEGORY_ADD_REQUEST,
  CATEGORY_ADD_SUCCESS,
  CATEGORY_ADD_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL
}
from '../types';

const addCategory = (name) => async (dispatch, getState) => {
  try {
    dispatch({ type: CATEGORY_ADD_REQUEST, payload: { name } });
    const { userSignin: { user }, } = getState();
    const { data } = await axios.post('/category/create/' + user._id,  { name }, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    dispatch({ type: CATEGORY_ADD_SUCCESS, payload: data });
  } catch (error) {
    console.log(error)
    dispatch({type: CATEGORY_ADD_FAIL, payload: error.response.data.error });
  }
}

const listCategories = () => async (dispatch) => {
  try{
    dispatch({type: CATEGORY_LIST_REQUEST});
    const { data } = await axios.get('/category');
    dispatch({type: CATEGORY_LIST_SUCCESS, payload: data});
    console.log('CATEGORIES', data)
  }
  catch(error){
    dispatch({type: CATEGORY_LIST_FAIL, payload: error.message})
  }
}

export { addCategory, listCategories }
