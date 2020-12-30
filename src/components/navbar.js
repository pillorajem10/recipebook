import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { listRecipes } from '../redux/actions/recipeActions';
import logo from '../images/recipebook.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActions';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//navigation
import { Link } from 'react-router-dom';


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const HideAppBar = (props) => {

  const [searchKeyword, setSearchKeyword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
   e.preventDefault();
   dispatch(listRecipes(searchKeyword));
  };

  const handleLogout = () => {
    dispatch(logout());
  }

  const homeReload = () => {
    window.location.href = '/home';
  }

  const { user } = useSelector((state) => state.userSignin);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className = 'appbar' style={{ background: '#000000' }}>
          <Toolbar>
          <ul>
          <li className = 'title'><img src = {logo}/></li>
            {user ? (
              <>
                <li><Link onClick={homeReload} to = '/home'>Home</Link></li>
                <li><Link to = '/about'>About Us</Link></li>
                {
                  user && user.role === 1 ? (
                    <li><Link to = '/admin'>Admin</Link></li>
                  ) : (
                    null
                  )
                }
                <li><Link onClick={handleLogout}>Sign Out</Link></li>
                <li>
                  <form onSubmit={submitHandler}>
                    <TextField placeholder = 'Search for recipes?' className = 'searchBar' style = {{ marginTop: '3%' }} id="outlined-search" type="search" variant="outlined" name="searchKeyword" onChange={(e) => setSearchKeyword(e.target.value)} />
                  </form>
                </li>
              </>
            ) : (
              null
            )}
          </ul>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
      </Container>
    </React.Fragment>
  );
}

export default HideAppBar
