import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//styling
import './App.css'

//components
import Navbar from './components/navbar';
import Footer from './components/footer';

//pages
import Signup from './pages/signup';
import Signin from './pages/signin';
import About from './pages/about';
import Default from './pages/default';
import RecipeDetails from './pages/recipeDetails';
import AllRecipe from './pages/allRecipe';
import MainHome from './pages/mainHomepage';
import SearchPage from './pages/searchPage';

//adminPage
import AdminPage from './adminPage/adminPage';
import CreateRecipe from './adminPage/createRecipe';
import CreateCategory from './adminPage/createCategory';

//routing
import PrivateRoute from './routes/privateRoute';
import AdminRoute from './routes/adminRoute';
import LoggedInRoute from './routes/loggedInRoute';

const App = () => {

  return (
    <BrowserRouter>
      //<Navbar/>
      <Switch>
         <LoggedInRoute path='/' exact={true} component={Signin}/>
         <PrivateRoute path='/home' component={MainHome}/>
         <PrivateRoute path='/recipes' component={AllRecipe}/>
         <LoggedInRoute path='/signup' component={Signup}/>
         <PrivateRoute path='/about' component={About}/>
         <PrivateRoute path='/search' component={SearchPage}/>
         <PrivateRoute path='/recipe/:id' component={RecipeDetails}/>
         <AdminRoute path='/admin' component={AdminPage}/>
         <AdminRoute path='/createrecipe' component={CreateRecipe}/>
         <AdminRoute path='/createcategory' component={CreateCategory}/>
         <Route component={Default}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
