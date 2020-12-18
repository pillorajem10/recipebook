import React from 'react';
import logo from '../images/recipebook.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActions';

//navigation
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }


  const { user } = useSelector((state) => state.userSignin);

  return (
    <ul>
    <li className = 'title'><img src = {logo}/></li>
      {user ? (
        <>
          <li className = 'welcomeTitle'>Welcome back! {user.name}</li>
          <li><Link to = '/home'>Home</Link></li>
          <li><Link to = '/about'>About Us</Link></li>
          <li><Link onClick={handleLogout}>Sign Out</Link></li>
        </>
      ) : (
        null
      )}
    </ul>
  )
}

export default Navbar;
