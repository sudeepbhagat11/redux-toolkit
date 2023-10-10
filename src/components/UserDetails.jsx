import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteUser from './DeleteUser';
import { fakeUser } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import DisplayUser from './DisplayUser';
const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (payload) =>{
    console.log(payload);
    dispatch(addUser(payload));

  }
  return (
    <>
        <div className='content'>
            <div className='admin-table'>
                <div class = "admin-subtitle">Click to Add Users </div> 
                <div class = "btn-center">
                <Button class = "btn" variant= "outline-primary" onClick={ () => addNewUser(fakeUser()) }>Add New Users</Button>
                </div>
            </div>
            <ul class = "li-center">
                <DisplayUser />
            </ul>

            <hr />
            <DeleteUser />
        </div>
    </>
  )
}

export default UserDetails;