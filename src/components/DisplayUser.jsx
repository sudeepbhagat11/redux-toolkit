import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { MdAccountBalance } from "react-icons/md";
import { removeUser } from '../store/slices/UserSlice';
import { Trash } from 'react-bootstrap-icons';



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
        return <li key = {id}> 
        {user}
        <span class = "btn-space">
        <Trash onClick={() =>{
            RemoveUser(id);

        }}/>
        </span>
        
        </li>
    })
  )
}

export default DisplayUser;
