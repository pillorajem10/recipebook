import React, { useState } from 'react';

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
import Container from '@material-ui/core/Container';
import TextField  from '@material-ui/core/TextField';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import ListItem from '@material-ui/core/ListItem';

const HideAppBar = (props) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(rbook.recipe.listSearchRecipes(searchKeyword));
    setSearchKeyword('');
    setOpen(false);
    history.push('/search?keyword=' + searchKeyword)
    if (searchKeyword === null) {
      history.push('/recipes')
    }
  };

  const handleLogout = () => {
    dispatch(rbook.user.logout());
    setOpen(false);
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { user } = useSelector((state) => state.userSignin);
  const { userInfo } = useSelector((state) => state.userRegister);


  return (
    <React.Fragment>
      <CssBaseline />
      <div className="appbar">
        <AppBar style={{background:"#000000"}}>
          <Toolbar>
            {userInfo || user ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="end"
               >
                <MenuIcon />
              </IconButton>
            ) : (
              null
            )}
            <ul className = "navigation">
              <li className = 'title'><img src = {logo} alt = 'logo'/></li>
            </ul>
          <Drawer
            variant="persistent"
            anchor="left"
            open={open}
          >
            <div>
              <IconButton onClick={handleDrawerClose}>
                <ClearIcon/>
              </IconButton>
            </div>
            <Divider />
              <List>
                  <ListItem>
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
                  <Divider/>
                  </ListItem>
                  <ListItem>
                    <ul className="sideBar">
                      <li><Link onClick ={handleDrawerClose} to = '/home'>Home</Link></li>
                      <li><Link onClick ={handleDrawerClose} to = '/about'>About Us</Link></li>
                      {
                        user && user.role === 1 ? (
                          <li><Link onClick ={handleDrawerClose} to = '/admin'>Admin</Link></li>
                        ) : (
                          null
                        )
                      }
                      <li><Link onClick={handleLogout}><ExitToAppIcon/></Link></li>
                    </ul>
                </ListItem>
              </List>
          </Drawer>
          </Toolbar>
        </AppBar>
        </div>
      <Toolbar />
      <Container>
      </Container>
    </React.Fragment>
  );
}

export default HideAppBar
