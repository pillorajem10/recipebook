import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//styling
import './App.css'

//components
import Navbar from './components/navbar';

//pages
import Signup from './pages/signup';
import Signin from './pages/signin';
import Home from './pages/home';
import About from './pages/about';
import Default from './pages/default';
import RecipeDetails from './pages/recipeDetails';

//routing
import PrivateRoute from './routes/privateRoute';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
         <Route path='/' exact component={Signin}/>
         <PrivateRoute path='/home' component={Home}/>
         <Route path='/signup' component={Signup}/>
         <PrivateRoute path='/about' component={About}/>
         <Route path='/recipe/:id' component={RecipeDetails}/>
         <Route component={Default}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
