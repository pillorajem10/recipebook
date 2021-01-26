import React, { useEffect, useState } from 'react';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { rbook } from '../redux/combineActions';

//navigation
import { Link } from 'react-router-dom';

//material-ui
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

//styling for material ui
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
    marginTop: '3%',
    marginBottom: '3%',
    width: '100%',
  },
}));

const CreateCategory = () => {

  const [name, setName] = useState('');
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const { loading, category, error, success } = useSelector(state => state.addCategory);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (category) {
      //
    }
    return () => {
      //
    };
  }, [category]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(rbook.category.addCategory(name));
    setOpenSnackBar(true);
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
      <Alert severity="success">{category && category.name} category created!</Alert>
    </Snackbar>
  );

  const createCategoryForm = () => (
    <>
    <center className = 'welcomeTitle'>Create new category here</center>
    <div  className = 'container'>
      {success && !error && showSuccess()}
      {!success && error && showError()}
      <form onSubmit = {submitHandler} className = 'form-container'>
        <FormControl className={(classes.margin, classes.textField)}>
          <InputLabel color="primary">Name of the new category</InputLabel>
          <Input
            type = "text"
            onChange={(e) => setName(e.target.value)}
            style = {{width: '100%'}}
            required
            id = 'name'
            name = 'name'
          />
        </FormControl>
        <Button style = {{marginTop: '3%'}} startIcon={<SaveIcon />} variant="contained" type="submit">Save Category</Button>
        <center style = {{marginTop: '1%', fontSize: 20}} ><Link className = 'adminLinks' to = '/admin'>Go back to admin page</Link></center>
      </form>
    </div>
    </>
  )

  document.title = 'Recipebook | CreateCategory'

  return(
    loading? <CircularProgress color = 'dark' className = 'loading1' /> :
    <>
     {createCategoryForm()}
    </>
  )
}

export default CreateCategory
