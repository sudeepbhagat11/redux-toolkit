import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { clearAllUser } from '../store/actions';

const DeleteUser = () => {

  const dispatch  = useDispatch();

  const ClearAllUsers = (() => {
    dispatch(clearAllUser());


  })

  return (
    <>
    <div class = "btn-center">
    <Button variant = "outline-danger"  onClick={() =>{
      ClearAllUsers();
      
  }}>Delete All Data</Button>
  </div>
  </>
  )
}

export default DeleteUser;