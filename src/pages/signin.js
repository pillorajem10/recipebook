import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const Signin = (props) => {

  const [values, setValues] = useState({
      email: "",
      password: "",
      loading: false,
      redirectToReferrer: false
  });

  const { loading, user, error } = useSelector(state => state.userSignin);
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/home';


  const { email, password } = values;

  useEffect (() => {
    if(user){
      props.history.push(redirect);
    }
    return () => {
      //
    };
  },[user])

  const handleChange = name => event => {
      setValues({ ...values, error: false, [name]: event.target.value });
  };


  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login(email, password))
  }

  const showError = () => (
      <center
          className="errorBox text-danger"
      >
          {error}
      </center>
  );

  const signInForm = () => (
    <>
    <center className = 'welcomeTitle'>Sign In</center>
    <div  className = 'container'>
      <form className = 'form-container' onSubmit = {submitHandler}>
        <div class="form-group" style = {{ marginTop:'3%' }}>
          <TextField color = 'secondary' type="email"
           name = 'email'
           label = 'Email Address'
           id = 'email'
           className = "form-control"
           onChange={handleChange('email')}
           required
          />
        </div>
        <div class="form-group" style = {{ marginTop:'3%' }}>
          <TextField color = 'secondary' type="password"
           name = 'password'
           label = 'Password'
           id = 'password'
           className = "form-control"
           onChange={handleChange('password')}
           required
          />
        </div>
        <Button style = {{marginTop: '5%'}} variant="contained" type="submit">Sign In</Button>
        <div style = {{marginTop: '5%', fontSize:20}}>Don't have an account? <Link style = {{color: 'gray', textDecoration:'none'}} to = '/signup'>Sign Up</Link></div>
      </form>
    </div>
    </>
  )

  return (
      loading? <CircularProgress color = 'dark' className = 'loading' />  :
      <>
       {showError()}
       {signInForm()}
      </>
  )
}

export default Signin;
