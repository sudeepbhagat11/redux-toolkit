import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteUser from './DeleteUser';
import { fakeUser } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import DisplayUser from './DisplayUser';
import { Card, ListGroup } from 'react-bootstrap';



const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (payload) =>{
    console.log(payload);
    dispatch(addUser(payload));

  }
  return (
    <>
        
                <div class = "admin-subtitle">Click to Add Users </div> 
            <Card className="card-light-blue">
              <Card.Body className="text-center">
                <Button class = "btn" variant= "outline-primary" onClick={ () => addNewUser(fakeUser()) }>Add New Users</Button>
               
            <div className = "card-light-blue">
            <ListGroup variant = "flush" >
                <DisplayUser />
            </ListGroup>
            </div>

            <hr />
            <DeleteUser />
            </Card.Body>
          </Card>
        
    </>
  )
}

export default UserDetails;