import React, { useState } from 'react';

//prop-types
import PropTypes from 'prop-types';

//redux
import { rbook } from '../redux/combineActions';
import { useSelector, useDispatch } from 'react-redux';

//navigation
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

//logo
import logo from '../images/recipebook.jpg';

//material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import TextField  from '@material-ui/core/TextField';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const HideAppBar = (props) => {

  const [searchKeyword, setSearchKeyword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(rbook.recipe.listAllRecipes(searchKeyword));
    setSearchKeyword('')
    history.push('/recipes?keyword=' + searchKeyword)
  };

  const handleLogout = () => {
    dispatch(rbook.user.logout());
  }

  const { user } = useSelector((state) => state.userSignin);
  const { userInfo } = useSelector((state) => state.userRegister);


  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className = 'appbar' style={{ background: '#000000' }}>
          <Toolbar>
          <ul>
          <li className = 'title'><img src = {logo} alt = 'logo'/></li>
            {userInfo || user ? (
              <>
              <div>
                <form onSubmit={submitHandler}>
                  <TextField
                   placeholder = 'Search for recipes?'
                   className = 'searchBar'
                   style = {{ marginTop: '3%' }}
                   id="outlined-search"
                   type="search"
                   variant="outlined"
                   name="searchKeyword"
                   value={searchKeyword}
                   onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                </form>
              </div>
                <li><Link to = '/home'>Home</Link></li>
                <li><Link to = '/about'>About Us</Link></li>
                {
                  user && user.role === 1 ? (
                    <li><Link to = '/admin'>Admin</Link></li>
                  ) : (
                    null
                  )
                }
                <li><Link onClick={handleLogout}><ExitToAppIcon/></Link></li>
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
