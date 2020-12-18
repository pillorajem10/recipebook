import axios from 'axios';
import Cookie from 'js-cookie';

import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT
}

from '../types';

const register = (name, email, password, password2) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST, payload: { name, email, password, password2 } });
  try {
    const { data } = await axios.post('/auth/signup', { name, email, password, password2 });
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error.response.data.error });
  }
}

const login = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: {email, password} });
  try{
    const { data } = await axios.post('/auth/signin', {email, password});
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('jwt',JSON.stringify(data));
    Cookie.set('user', JSON.stringify(data));
  } catch (error){
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
  }
}

const logout = ( data ) => async (dispatch) => {
  Cookie.remove('user');
  localStorage.removeItem('jwt');
  dispatch({ type: USER_SIGNOUT, payload: '' });
}

export { register, login, logout }
