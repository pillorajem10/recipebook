import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCategory } from '../redux/actions/categoryActions';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const CreateCategory = () => {

  const [name, setName] = useState('');
  const { loading, category, error, success } = useSelector(state => state.addCategory);
  const dispatch = useDispatch();

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
    dispatch(addCategory(name));
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
    <div  className = 'container'>
      <form onSubmit = {submitHandler} className = 'form-container'>
        <div class="form-group">
          <b style = {{ fontSize:20 }} >New Category</b>
          <input
           type = "text"
           onChange={(e) => setName(e.target.value)}
           className = "form-control"
           placeholder = "Enter the name of the new category"
           required
           id = 'name'
           name = 'name'
          />
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
        <center style = {{marginTop: '1%', fontSize: 20}} ><Link className = 'adminLinks' to = '/admin'>Go back to admin page</Link></center>
      </form>
    </div>
  )

  return(
    loading? <CircularProgress color = 'dark' className = 'loading' /> :
    <>
     {showSuccess()}
     {showError()}
     {createCategoryForm()}
    </>
  )
}

export default CreateCategory
