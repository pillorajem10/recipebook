import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../redux/actions/userActions';
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
    <div className = 'container'>
      <form onSubmit = {submitHandler} className = 'form-container'>
        <div class="form-group">
          <b style = {{ fontSize:20 }} >Name</b>
          <input id = 'name'
            onChange={(e) => setName(e.target.value)}
            name = 'name'
            type = 'text'
            className = "form-control"
            placeholder="Enter Full Name"
            required
          />
        </div>
        <div class="form-group">
          <b style = {{ fontSize:20 }} >Email address</b>
          <input id = 'email'
            onChange={(e) => setEmail(e.target.value)}
            name = 'email'
            type="text"
            className = "form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="form-group">
          <b style = {{ fontSize:20 }} >Password</b>
          <input id = 'password'
            onChange={(e) => setPassword(e.target.value)}
            name = 'password'
            type="password"
            className = "form-control"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group">
          <b style = {{ fontSize:20 }} >Confirm Password</b>
          <input id = 'password2'
            onChange={(e) => setPassword2(e.target.value)}
            name = 'password2'
            type="password"
            className = "form-control"
            placeholder="Confirm Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-dark">Sign Up</button>
        <div style = {{marginTop: '5%', fontSize:20}}>Have an account? <Link style = {{color: 'gray', textDecoration:'none'}} to = '/'>Sign In</Link></div>
      </form>
    </div>
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
