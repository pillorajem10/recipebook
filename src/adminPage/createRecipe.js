import React from 'react'
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const addRecipeForm = () => (
  <div  className = 'container'>
    <form className = 'form-container'>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >New recipe</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter the name of the new recipe"
         required
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
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Category</b>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>category 1</option>
          <option>category 2</option>
          <option>category 3</option>
          <option>category 4</option>
          <option>category 5</option>
        </select>
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Ingredient 1</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Ingredient 1 (required)"
         required
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Ingredient 2</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Ingredient 2 (required)"
         required
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Ingredient 3</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Ingredient 3 (required)"
         required
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Ingredient 4</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Ingredient 4 (not required)"
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Ingredient 5</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Ingredient 5 (not required)"
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Ingredient 6</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Ingredient 6 (not required)"
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Ingredient 7</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Ingredient 7 (not required)"
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Ingredient 8</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Ingredient 8 (not required)"
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Ingredient 9</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Ingredient 9 (not required)"
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Ingredient 10</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Ingredient 10 (not required)"
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Ingredient 11</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Ingredient 11 (not required)"
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Instruction 1</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Instruction 1 (required)"
         required
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Instruction 2</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Instruction 2 (required)"
         required
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Instruction 3</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Instruction 3 (required)"
         required
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Instruction 4</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Instruction 4 (not required)"
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Instruction 5</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Instruction 5 (not required)"
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Instruction 6</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Instruction 6 (not required)"
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Instruction 7</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Instruction 7 (not required)"
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Instruction 8</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Instruction 8 (not required)"
         required
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Instruction 9</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Instruction 9 (not required)"
         required
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Instruction 10</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Instruction 10 (not required)"
         required
        />
      </div>
      <div class="form-group">
        <b style = {{ fontSize:20 }} >Instruction 11</b>
        <input
         type = "text"
         className = "form-control"
         placeholder = "Enter Instruction 11 (not required)"
         required
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
        />
      </div>
      <button type="submit" class="btn btn-dark">Submit</button>
      <center style = {{marginTop: '1%', fontSize: 20}} ><Link className = 'adminLinks' to = '/admin'>Go back to admin page</Link></center>
    </form>
  </div>
)

const CreateRecipe = () => {
  return(
    <>
     {addRecipeForm()}
    </>
  )
}

export default CreateRecipe;
