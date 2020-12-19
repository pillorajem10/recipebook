import React from 'react'
import { Link } from 'react-router-dom';

const CreateCategory = () => {

  const createCategoryForm = () => (
    <div  className = 'container'>
      <form className = 'form-container'>
        <div class="form-group">
          <label>New Category</label>
          <input type="email"
           className = "form-control"
           placeholder="Enter the name of the new category"
           required
          />
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
        <center style = {{marginTop: '1%', fontSize: 20}} ><Link className = 'adminLinks' to = '/admin'>Go back to admin page</Link></center>
      </form>
    </div>
  )

  return(
    <>
     {createCategoryForm()}
    </>
  )
}

export default CreateCategory
