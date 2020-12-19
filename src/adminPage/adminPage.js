import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminPage = () => {

  const { user } = useSelector((state) => state.userSignin);

  return (
    <div style = {{ fontSize: 30 }}>
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
