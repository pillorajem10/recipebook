import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listCategories } from '../redux/actions/categoryActions';
import { addRecipe } from '../redux/actions/recipeActions'
import CircularProgress from '@material-ui/core/CircularProgress';


const CreateRecipe = (props) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [ingredients1, setIngredients1] = useState('');
  const [ingredients2, setIngredients2] = useState('');
  const [ingredients3, setIngredients3] = useState('');
  const [ingredients4, setIngredients4] = useState('');
  const [ingredients5, setIngredients5] = useState('');
  const [ingredients6, setIngredients6] = useState('');
  const [ingredients7, setIngredients7] = useState('');
  const [ingredients8, setIngredients8] = useState('');
  const [ingredients9, setIngredients9] = useState('');
  const [ingredients10, setIngredients10] = useState('');
  const [instruction, setInstruction] = useState('');
  const [instruction1, setInstruction1] = useState('');
  const [instruction2, setInstruction2] = useState('');
  const [instruction3, setInstruction3] = useState('');
  const [instruction4, setInstruction4] = useState('');
  const [instruction5, setInstruction5] = useState('');
  const [instruction6, setInstruction6] = useState('');
  const [instruction7, setInstruction7] = useState('');
  const [instruction8, setInstruction8] = useState('');
  const [instruction9, setInstruction9] = useState('');
  const [instruction10, setInstruction10] = useState('');
  const [photo, setPhoto] = useState('');


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
      description,
      category,
      instruction,
      instruction1,
      instruction2,
      instruction3,
      instruction4,
      instruction5,
      instruction6,
      instruction7,
      instruction8,
      instruction9,
      instruction10,
      ingredients,
      ingredients1,
      ingredients2,
      ingredients3,
      ingredients4,
      ingredients5,
      ingredients6,
      ingredients7,
      ingredients8,
      ingredients9,
      ingredients10,
      photo
    ));
  }

  const showError = () => (
      <center
          className="errorBox text-danger"
          style={{ display: error ? '' : 'none' }}
      >
          {error}
      </center>
  );

  const showSuccess = () => (
    <center className="errorBox text-info" style={{ display: success ? '' : 'none' }}>
      {recipe.name} recipe created!
    </center>
  );

  const addRecipeForm = () => (
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
           onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div class="form-group">
          <b style = {{ fontSize:20 }} >Category</b>
          <select class="form-control" id="exampleFormControlSelect1" name = 'category' id = 'category' onChange={(e) => setCategory(e.target.value)}>
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
           onChange={(e) => setIngredients(e.target.value)}
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
           onChange={(e) => setIngredients1(e.target.value)}
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
           onChange={(e) => setIngredients2(e.target.value)}
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
           onChange={(e) => setIngredients3(e.target.value)}
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
           onChange={(e) => setIngredients4(e.target.value)}
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
           onChange={(e) => setIngredients5(e.target.value)}
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
           onChange={(e) => setIngredients6(e.target.value)}
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
           onChange={(e) => setIngredients7(e.target.value)}
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
           onChange={(e) => setIngredients8(e.target.value)}
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
           onChange={(e) => setIngredients9(e.target.value)}
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
           onChange={(e) => setIngredients10(e.target.value)}
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
           onChange={(e) => setInstruction(e.target.value)}
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
           onChange={(e) => setInstruction1(e.target.value)}
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
           onChange={(e) => setInstruction2(e.target.value)}
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
           onChange={(e) => setInstruction3(e.target.value)}
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
           onChange={(e) => setInstruction4(e.target.value)}
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
           onChange={(e) => setInstruction5(e.target.value)}
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
           onChange={(e) => setInstruction6(e.target.value)}
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
           onChange={(e) => setInstruction7(e.target.value)}
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
           onChange={(e) => setInstruction8(e.target.value)}
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
           onChange={(e) => setInstruction9(e.target.value)}
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
           onChange={(e) => setInstruction10(e.target.value)}
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
           onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
        <center style = {{marginTop: '1%', fontSize: 20}} ><Link className = 'adminLinks' to = '/admin'>Go back to admin page</Link></center>
      </form>
    </div>
  )

  return (
    loading? <CircularProgress color = 'dark' className = 'loading' /> :
    <>
     {showSuccess()}
     {showError()}
     {addRecipeForm()}
    </>
  )
}

export default CreateRecipe;
