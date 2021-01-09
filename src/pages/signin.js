import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { rbook } from '../redux/combineActions';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import Input from '@material-ui/core/Input';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(8),
  },
  textField: {
    width: '100%',
    marginTop:'3%',
  },
}));

const Signin = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [values, setValues] = useState({
      email: "",
      password: "",
      showPassword: false,
  });
  const { loading, user, error } = useSelector(state => state.rbook.user);
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

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(rbook.user.login(email, password))
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
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color = 'secondary' >Email</InputLabel>
          <Input
            color = 'secondary'
            id="email"
            type='text'
            required
            value={values.email}
            onChange={handleChange('email')}
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color = 'secondary' >Password</InputLabel>
          <Input
            color = 'secondary'
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            required
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
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
