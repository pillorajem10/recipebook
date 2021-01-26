import React, { useEffect, useState } from 'react'

//redux
import { useSelector, useDispatch } from 'react-redux';
import { rbook } from '../redux/combineActions';

//navigation
import { Link } from 'react-router-dom';

//material-ui
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


//styling for material-ui
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    marginBottom: '3%',
    width: '100%',
    '& label.Mui-focused': {
      color: '#FF3F16',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FF3F16',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
           borderColor: '#FF3F16',
        },
    },
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
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const { user } = useSelector((state) => state.userSignin);
  const { loading, recipe, error, success } = useSelector(state => state.addRecipe);
  const { categories } = useSelector(state => state.listCategories);

  const recipeBy = user.name;

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
    const payload = {
      name,
      description,
      category,
      recipeBy,
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
      photo,
      photo1
    }
    dispatch(rbook.recipe.addRecipe(payload));
    setOpenSnackBar(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar(false);
  };

  const showError = () => (
    <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={openSnackBar} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity="error">{error}</Alert>
    </Snackbar>
  );

  const showSuccess= () => (
    <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={openSnackBar} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity="success">{recipe && recipe.name} added in recipes!</Alert>
    </Snackbar>
  );

  const addRecipeForm = () => (
    <>
    <center className = 'welcomeTitle'>Create new recipe here</center>
    <div className = 'container'>
      {success && !error && showSuccess()}
      {!success && error && showError()}
      <form onSubmit = {submitHandler} className = 'form-container'>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Name of the recipe</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setName(e.target.value)}
            required
            id = 'name'
            name = 'name'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <TextField
            id="description"
            label="Description"
            multiline
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            rows={4}
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel htmlFor="age-native-simple">Category</InputLabel>
          <Select
            native
            onChange={(e) => setCategory(e.target.value)}
            inputProps={{
              name: 'category',
              id: 'category',
            }}
          >
            <option>Select category</option>
            {categories &&
             categories.map((c, i) => (
               <option key={i} value={c._id}>
                   {c.name}
               </option>
            ))}
          </Select>
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Ingredient 1 (required)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setIngredients(e.target.value)}
            required
            id = 'ingredients'
            name = 'ingredients'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Ingredient 2 (required)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setIngredients1(e.target.value)}
            required
            id = 'ingredients1'
            name = 'ingredients1'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Ingredient 3 (required)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setIngredients2(e.target.value)}
            required
            id = 'ingredients2'
            name = 'ingredients2'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Ingredient 4 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setIngredients3(e.target.value)}
            id = 'ingredients3'
            name = 'ingredients3'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Ingredient 5 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setIngredients4(e.target.value)}
            id = 'ingredients4'
            name = 'ingredients4'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Ingredient 6 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setIngredients5(e.target.value)}
            id = 'ingredients5'
            name = 'ingredients5'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Ingredient 7 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setIngredients6(e.target.value)}
            id = 'ingredients6'
            name = 'ingredients6'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Ingredient 8 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setIngredients7(e.target.value)}
            id = 'ingredients7'
            name = 'ingredients7'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Ingredient 9 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setIngredients8(e.target.value)}
            id = 'ingredients8'
            name = 'ingredients8'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Ingredient 10 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setIngredients9(e.target.value)}
            id = 'ingredients9'
            name = 'ingredients9'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Ingredient 11 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setIngredients10(e.target.value)}
            id = 'ingredients10'
            name = 'ingredients10'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Instruction 1 (required)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setInstruction(e.target.value)}
            required
            id = 'instruction'
            name = 'instruction'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Instruction 2 (required)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setInstruction1(e.target.value)}
            required
            id = 'instruction1'
            name = 'instruction1'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Instruction 3 (required)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setInstruction2(e.target.value)}
            required
            id = 'instruction2'
            name = 'instruction2'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Instruction 4 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setInstruction3(e.target.value)}
            id = 'instruction3'
            name = 'instruction3'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Instruction 5 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setInstruction4(e.target.value)}
            id = 'instruction4'
            name = 'instruction4'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Instruction 6 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setInstruction5(e.target.value)}
            id = 'instruction5'
            name = 'instruction5'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Instruction 7 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setInstruction6(e.target.value)}
            id = 'instruction6'
            name = 'instruction6'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Instruction 8 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setInstruction7(e.target.value)}
            id = 'instruction7'
            name = 'instruction7'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Instruction 9 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setInstruction8(e.target.value)}
            id = 'instruction8'
            name = 'instruction8'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Instruction 10 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setInstruction9(e.target.value)}
            id = 'instruction9'
            name = 'instruction9'
          />
        </FormControl>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Instruction 11 (if necesarry)</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setInstruction10(e.target.value)}
            id = 'instruction10'
            name = 'instruction10'
          />
        </FormControl>
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

  document.title = 'Recipebook | CreateRecipe'

  return (
    loading? <CircularProgress color = 'dark' className = 'loading1' /> :
    <>
     {addRecipeForm()}
    </>
  )
}

export default CreateRecipe;
