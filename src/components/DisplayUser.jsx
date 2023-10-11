import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { MdAccountBalance } from "react-icons/md";
import { removeUser } from '../store/slices/UserSlice';
import { Trash } from 'react-bootstrap-icons';
import { ListGroup, Row, Col } from "react-bootstrap";



const DisplayUser = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users; // Taking data out From store and storing it in data
         
    });
    console.log(data);

    const RemoveUser = (id) => {
        dispatch(removeUser(id));
    }

  return (
    // <div>DisplayUser</div>
    data.map((user,id) => {  //Printing data stored in data variable
        return <ListGroup.Item className = "card-light-blue"key = {id}> 
        <Row>
        <Col md = {10}>
        {user}
        </Col>

        <Col md = {2}>
        
        <Trash onClick={() =>{
            RemoveUser(id);

        }}/>
        </Col>
        </Row>
        
        </ListGroup.Item>
    })
  )
}

export default DisplayUser;
