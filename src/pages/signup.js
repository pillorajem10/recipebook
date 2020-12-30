import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../redux/actions/userActions';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const Signup = (props) => {



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const { loading, user, error, success } = useSelector(state => state.userRegister);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      //
    }
    return () => {
      //
    };
  }, [user]);

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
          <div class="form-group" style = {{ marginTop:'1%' }}>
            <TextField color = 'secondary' id = 'name'
              label="Full name"
              onChange={(e) => setName(e.target.value)}
              name = 'name'
              type = 'text'
              style = {{width: '100%'}}
              required
            />
          </div>
          <div class="form-group" style = {{ marginTop:'1%' }}>
            <TextField color = 'secondary' color = 'secondary' id = 'email'
              label="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              name = 'email'
              type="text"
              style = {{width: '100%'}}
              required
            />
          </div>
          <div class="form-group" style = {{ marginTop:'1%' }}>
            <TextField color = 'secondary' id = 'password'
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              name = 'password'
              type="password"
              style = {{width: '100%'}}
              required
            />
          </div>
          <div class="form-group" style = {{ marginTop:'1%' }}>
            <TextField color = 'secondary' color = 'secondary' id = 'password2'
              label="Confirm Password"
              onChange={(e) => setPassword2(e.target.value)}
              name = 'password2'
              type="password"
              style = {{width: '100%'}}
              required
            />
          </div>
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
