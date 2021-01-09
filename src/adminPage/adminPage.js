import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { rbook } from '../redux/combineActions';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.rbook.user);

  useEffect(() => {
    return () => {
      dispatch(rbook.recipe.setSearchKeyword(''));
    }
  });

  return (
    <div style = {{ fontSize: 25 }}>
      <center className = 'adminPageTitle' style = {{marginTop: '1%'}}>
        Admin Profile
      </center>
      <center style = {{marginTop: '2%'}}>
        Admin Id: <div style = {{ color:'red' }}>{user._id}</div>
      </center>
      <center style = {{marginTop: '1%'}}>
        Admin Name: <div style = {{ color:'red' }}>{user.name}</div>
      </center>
      <center style = {{marginTop: '1%'}}>
        Admin Email: <div style = {{ color:'red' }}>{user.email}</div>
      </center>
      <center style = {{marginTop: '1%'}}>
        Actions:
        <div><Link className = 'adminLinks' to = '/createcategory'>Create Category</Link></div>
        <div><Link className = 'adminLinks' to = '/createrecipe'>Create Recipe</Link></div>
      </center>
    </div>
  )
}

export default AdminPage;
