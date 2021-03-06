import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { rbook } from '../redux/combineActions';

import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const CreateCategory = () => {
  const [name, setName] = useState('');
  const { loading, category, error, success } = useSelector(state => {
    console.log('[STATE] ', state);
    return state.rbook.category
  });
  const dispatch = useDispatch();

  console.log('[CREATE CATEGORY] ', category)
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
  }

  const showError = () => (
      <center
          className="errorBox text-danger"
          style={{ display: error ? '' : 'none' }}
      >
          This category already exists
      </center>
  );

  const showSuccess = () => (
    <center className="errorBox text-info" style={{ display: success ? '' : 'none' }}>
      {category.name} category created!
    </center>
  );

  const createCategoryForm = () => (
    <>
    <center className = 'welcomeTitle'>Create new category here</center>
    <div  className = 'container'>
      <form onSubmit = {submitHandler} className = 'form-container'>
        <div className="form-group">
          <TextField color = 'secondary'
           type = "text"
           onChange={(e) => setName(e.target.value)}
           style = {{width: '100%'}}
           label = "Enter the name of the new category"
           required
           id = 'name'
           name = 'name'
          />
        </div>
        <Button startIcon={<SaveIcon />} variant="contained" type="submit">Save Category</Button>
        <center style = {{marginTop: '1%', fontSize: 20}} ><Link className = 'adminLinks' to = '/admin'>Go back to admin page</Link></center>
      </form>
    </div>
    </>
  )

  return(
    loading? <CircularProgress color = 'dark' className = 'loading' /> :
    <>
     {success && showSuccess()}
     {!success && showError()}
     {createCategoryForm()}
    </>
  )
}

export default CreateCategory
