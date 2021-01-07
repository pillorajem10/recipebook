import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../redux/actions/userActions';
import TextField from '@material-ui/core/TextField'
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

const Signup = (props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
      name: '',
      email: "",
      password: "",
      password2: '',
      showPassword: false,
      showPassword2: false
  });
  const { loading, user, error, success } = useSelector(state => state.userRegister);
  const dispatch = useDispatch();

  const { name, email, password, password2 } = values;

  useEffect(() => {
    if (user) {
      //
    }
    return () => {
      //
    };
  }, [user]);

  const handleChange = name => event => {
      setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowPassword2 = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(register(name, email, password, password2));
  }

  const showError = () => (
      <center
          className="errorBox text-danger"
      >
          {error}
      </center>
  );

  const showSuccess= () => (
    <center className="errorBox" style={{ display: success ? '' : 'none' }}>
        New account is created. You may now <Link style = {{color: 'blue', textDecoration:'none'}} to='/'>Sign In</Link>
    </center>
  );

  const signUpForm = () => (
    <>
      <center className = 'welcomeTitle'>Sign Up here</center>
      <div className = 'container'>
        <form onSubmit = {submitHandler} className = 'form-container'>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color = 'secondary' >Full Name</InputLabel>
          <Input
            color = 'secondary'
            id="name"
            type='text'
            required
            value={values.name}
            onChange={handleChange('name')}
          />
        </FormControl>
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
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color = 'secondary' >Confirm Password</InputLabel>
          <Input
            color = 'secondary'
            id="password"
            type={values.showPassword2 ? 'text' : 'password'}
            value={values.password2}
            required
            onChange={handleChange('password2')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                >
                  {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
          <Button style = {{marginTop: '5%'}} variant="contained" type="submit">Sign Up</Button>
          <div style = {{marginTop: '5%', fontSize:20}}>Have an account? <Link style = {{color: 'gray', textDecoration:'none'}} to = '/'>Sign In</Link></div>
        </form>
      </div>
    </>
  )

  return (
    loading? <CircularProgress color = 'dark' className = 'loading' /> :
    <>
     {showSuccess()}
     {showError()}
     {signUpForm()}
    </>
  )
}

export default Signup;
