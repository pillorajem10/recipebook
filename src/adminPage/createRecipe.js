import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { rbook } from '../redux/combineActions';

import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const CreateRecipe = (props) => {
  const classes = useStyles();
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
  const [photo1, setPhoto1] = useState('');

  const { loading, recipe, error, success } = useSelector(state => state.rbook.recipe);
  const { categories } = useSelector(state => state.rbook.category);

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
    dispatch(rbook.category.listCategories());
    return () => {
    //
    };
  }, [])

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(rbook.recipe.addRecipe(
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
      photo,
      photo1
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
    <>
    <center className = 'welcomeTitle'>Create new recipe here</center>
    <div className = 'container'>
      <form onSubmit = {submitHandler} className = 'form-container'>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter the name of the new recipe'
           required
           name = 'name'
           id = 'name'
           onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <textarea
           rows = '5'
           type = "text"
           style = {{width: '100%'}}
           placeholder = "Enter the description of the new recipe"
           required
           name = 'description'
           id = 'description'
           onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div class="form-group">
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
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           required
           label = 'Enter Ingredient 1 (required)'
           name = 'ingredients'
           id = 'ingredients'
           onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           required
           label = 'Enter Ingredient 2 (required)'
           name = 'ingredients1'
           id = 'ingredients1'
           onChange={(e) => setIngredients1(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           label = 'Enter Ingredient 3 (required)'
           style = {{width: '100%'}}
           required
           name = 'ingredients2'
           id = 'ingredients2'
           onChange={(e) => setIngredients2(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           name = 'ingredients3'
           id = 'ingredients3'
           label = 'Enter Ingredient 4 (if necessary)'
           onChange={(e) => setIngredients3(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           name = 'ingredients4'
           label = 'Enter Ingredient 5 (if necessary)'
           id = 'ingredients4'
           onChange={(e) => setIngredients4(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Ingredient 6 (if necessary)'
           name = 'ingredients5'
           id = 'ingredients5'
           onChange={(e) => setIngredients5(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Ingredient 7 (if necessary)'
           name = 'ingredients6'
           id = 'ingredients6'
           onChange={(e) => setIngredients6(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Ingredient 8 (if necessary)'
           name = 'ingredients7'
           id = 'ingredients7'
           onChange={(e) => setIngredients7(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Ingredient 9 (if necessary)'
           name = 'ingredients8'
           id = 'ingredients8'
           onChange={(e) => setIngredients8(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Ingredient 10 (if necessary)'
           name = 'ingredients9'
           id = 'ingredients9'
           onChange={(e) => setIngredients9(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Ingredient 11 (if necessary)'
           name = 'ingredients10'
           id = 'ingredients10'
           onChange={(e) => setIngredients10(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           required
           name = 'instruction'
           label = 'Enter Instruction 1 (required)'
           id = 'instruction'
           onChange={(e) => setInstruction(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Instruction 2 (required)'
           required
           name = 'instruction1'
           id = 'instruction1'
           onChange={(e) => setInstruction1(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Instruction 3 (required)'
           required
           name = 'instruction2'
           id = 'instruction2'
           onChange={(e) => setInstruction2(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           name = 'instruction3'
           label = 'Enter Instruction 4 (if necessary)'
           id = 'instruction3'
           onChange={(e) => setInstruction3(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Instruction 5 (if necessary)'
           name = 'instruction4'
           id = 'instruction4'
           onChange={(e) => setInstruction4(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Instruction 6 (if necessary)'
           name = 'instruction5'
           id = 'instruction5'
           onChange={(e) => setInstruction5(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Instruction 7 (if necessary)'
           name = 'instruction6'
           id = 'instruction6'
           onChange={(e) => setInstruction6(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Instruction 8 (if necessary)'
           name = 'instruction7'
           id = 'instruction7'
           onChange={(e) => setInstruction7(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Instruction 9 (if necessary)'
           name = 'instruction8'
           id = 'instruction8'
           onChange={(e) => setInstruction8(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Instruction 10 (if necessary)'
           name = 'instruction9'
           id = 'instruction9'
           onChange={(e) => setInstruction9(e.target.value)}
          />
        </div>
        <div class="form-group">
          <TextField color = 'secondary'
           type = "text"
           style = {{width: '100%'}}
           label = 'Enter Instruction 11 (if necessary)'
           name = 'instruction10'
           id = 'instruction10'
           onChange={(e) => setInstruction10(e.target.value)}
          />
        </div>
        <div className={classes.root}>
          <input
            accept="image/*"
            className={classes.input}
            id="photo"
            type="file"
            name = 'photo'
            onChange={(e) => setPhoto(e.target.files[0])}
          />
          <label htmlFor="photo">
            <Button variant="contained" color="primary" component="span" startIcon={<CloudUploadIcon />}>
              Upload Recipe Photo
            </Button>
          </label>
        </div>
        <div className={classes.root}>
          <input
          accept="image/*"
          className={classes.input}
          id="photo1"
          type="file"
          name = 'photo1'
          onChange={(e) => setPhoto1(e.target.files[0])}
          />
          <label htmlFor="photo1">
            <Button variant="contained" color="primary" component="span" startIcon={<CloudUploadIcon />}>
              Upload Recipe Details Photo
            </Button>
          </label>
        </div>
        <Button startIcon={<SaveIcon />} variant="contained" type="submit">Save Recipe</Button>
        <center style = {{marginTop: '1%', fontSize: 20}} ><Link className = 'adminLinks' to = '/admin'>Go back to admin page</Link></center>
      </form>
    </div>
    </>
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
