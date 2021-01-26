import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminPage = () => {

  const { user } = useSelector((state) => state.userSignin);

  document.title = 'Recipebook | Adminpage'

  return (
    <div style = {{ fontSize: 25 }}>
      <center className = 'adminPageTitle'>
        Admin Profile
      </center>
      <center style = {{marginTop: '1rem'}}>
        Admin Id: <div style = {{ color:'red' }}>{user._id}</div>
      </center>
      <center style = {{marginTop: '1rem'}}>
        Admin Name: <div style = {{ color:'red' }}>{user.name}</div>
      </center>
      <center style = {{marginTop: '1rem'}}>
        Admin Email: <div style = {{ color:'red' }}>{user.email}</div>
      </center>
      <center style = {{marginTop: '1rem'}}>
        Actions:
        <div><Link className = 'adminLinks' to = '/createcategory'>Create Category</Link></div>
        <div><Link className = 'adminLinks' to = '/createrecipe'>Create Recipe</Link></div>
      </center>
    </div>
  )
}

export default AdminPage;
