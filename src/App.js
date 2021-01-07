import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//styling
import './App.css'

//components
import Navbar from './components/navbar';
import Footer from './components/footer';
import SearchRecipes from './components/searchRecipes';

//pages
import Signup from './pages/signup';
import Signin from './pages/signin';
import Home from './pages/home';
import About from './pages/about';
import Default from './pages/default';
import RecipeDetails from './pages/recipeDetails';
import AllRecipe from './pages/allRecipe';

//adminPage
import AdminPage from './adminPage/adminPage';
import CreateRecipe from './adminPage/createRecipe';
import CreateCategory from './adminPage/createCategory';

//routing
import PrivateRoute from './routes/privateRoute';
import AdminRoute from './routes/adminRoute';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <SearchRecipes/>
      <Switch>
         <Route path='/' exact={true} component={Signin}/>
         <PrivateRoute path='/home' component={Home}/>
         <PrivateRoute path='/recipes' component={AllRecipe}/>
         <Route path='/signup' component={Signup}/>
         <PrivateRoute path='/about' component={About}/>
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
