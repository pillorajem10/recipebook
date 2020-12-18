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
  const { loading, user, error } = useSelector(state => state.userRegister);
  const dispatch = useDispatch();

  const redirect = '/';

  useEffect(() => {
    if (user) {
      props.history.push(redirect);
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

  const signUpForm = () => (
    <div className = 'container'>
      <form onSubmit = {submitHandler} className = 'form-container'>
        <div class="form-group">
          <label>Name</label>
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
          <label>Email address</label>
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
          <label>Password</label>
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
          <label>Confirm Password</label>
          <input id = 'password2'
            onChange={(e) => setPassword2(e.target.value)}
            name = 'password2'
            type="password"
            className = "form-control"
            placeholder="Confirm Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-dark">Register</button>
        <div style = {{marginTop: '5%', fontSize:20}}>Have an account? <Link style = {{color: 'gray', textDecoration:'none'}} to = '/'>Sign In</Link></div>
      </form>
    </div>
  )

  return (
    loading? <CircularProgress color = 'dark' className = 'loading' /> :
    <>
     {showError()}
     {signUpForm()}
    </>
  )
}

export default Signup;