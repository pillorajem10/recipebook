import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listCategories } from '../redux/actions/categoryActions';
import { addRecipe } from '../redux/actions/recipeActions'
import CircularProgress from '@material-ui/core/CircularProgress';


const CreateRecipe = (props) => {

  const [name, setName] = useState('');


  const { loading, recipe, error, success } = useSelector(state => state.addRecipe);
  const { categories } = useSelector(state => state.listCategories);

  const dispatch = useDispatch();

  useEffect(() => {
    if (recipe) {
      //
    }
    return () => {
      //
    };
  }, [recipe]);

  useEffect(() => {
    dispatch(listCategories());
    return () => {
    //
    };
  }, [])

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(addRecipe(
      name,
    ));
  }


  return (
     loading? <CircularProgress color = 'dark' className = 'loading' /> :
     <div className = 'container'>
       <form onSubmit = {submitHandler} className = 'form-container'>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >New recipe</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter the name of the new recipe"
            required
            name = 'name'
            id = 'name'
            onChange={(e) => setName(e.target.value)}
           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Description of the recipe</b>
           <textarea
            rows = '5'
            type = "text"
            className = "form-control"
            placeholder = "Enter the name of the new recipe"
            required
            name = 'description'
            id = 'description'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Category</b>
           <select class="form-control" id="exampleFormControlSelect1" name = 'category' id = 'category'>
             <option>Select category</option>
             {categories &&
              categories.map((c, i) => (
                <option key={i} value={c._id}>
                    {c.name}
                </option>
             ))}
           </select>
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Ingredient 1</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Ingredient 1 (required)"
            required
            name = 'ingredients'
            id = 'ingredients'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Ingredient 2</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Ingredient 2 (required)"
            required
            name = 'ingredients1'
            id = 'ingredients1'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Ingredient 3</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Ingredient 3 (required)"
            required
            name = 'ingredients2'
            id = 'ingredients2'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Ingredient 4</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Ingredient 4 (not required)"
            name = 'ingredients3'
            id = 'ingredients3'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Ingredient 5</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Ingredient 5 (not required)"
            name = 'ingredients4'
            id = 'ingredients4'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Ingredient 6</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Ingredient 6 (not required)"
            name = 'ingredients5'
            id = 'ingredients5'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Ingredient 7</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Ingredient 7 (not required)"
            name = 'ingredients6'
            id = 'ingredients6'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Ingredient 8</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Ingredient 8 (not required)"
            name = 'ingredients7'
            id = 'ingredients7'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Ingredient 9</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Ingredient 9 (not required)"
            name = 'ingredients8'
            id = 'ingredients8'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Ingredient 10</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Ingredient 10 (not required)"
            name = 'ingredients9'
            id = 'ingredients9'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Ingredient 11</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Ingredient 11 (not required)"
            name = 'ingredients10'
            id = 'ingredients10'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Instruction 1</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Instruction 1 (required)"
            required
            name = 'instruction'
            id = 'instruction'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Instruction 2</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Instruction 2 (required)"
            required
            name = 'instruction1'
            id = 'instruction1'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Instruction 3</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Instruction 3 (required)"
            required
            name = 'instruction2'
            id = 'instruction2'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Instruction 4</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Instruction 4 (not required)"
            name = 'instruction3'
            id = 'instruction3'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Instruction 5</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Instruction 5 (not required)"
            name = 'instruction4'
            id = 'instruction4'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Instruction 6</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Instruction 6 (not required)"
            name = 'instruction5'
            id = 'instruction5'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Instruction 7</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Instruction 7 (not required)"
            name = 'instruction6'
            id = 'instruction6'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Instruction 8</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Instruction 8 (not required)"
            name = 'instruction7'
            id = 'instruction7'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Instruction 9</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Instruction 9 (not required)"
            name = 'instruction8'
            id = 'instruction8'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Instruction 10</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Instruction 10 (not required)"
            name = 'instruction9'
            id = 'instruction9'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Instruction 11</b>
           <input
            type = "text"
            className = "form-control"
            placeholder = "Enter Instruction 11 (not required)"
            name = 'instruction10'
            id = 'instruction10'

           />
         </div>
         <div class="form-group">
           <b style = {{ fontSize:20 }} >Photo</b>
           <input
            type="file"
            accept="image/*"
            className = "form-control"
            required
            style = {{ height:'60%' }}
            name = 'photo'
            id = 'photo'

           />
         </div>
         <button type="submit" class="btn btn-dark">Submit</button>
         <center style = {{marginTop: '1%', fontSize: 20}} ><Link className = 'adminLinks' to = '/admin'>Go back to admin page</Link></center>
       </form>
     </div>
  )
}

export default CreateRecipe;
