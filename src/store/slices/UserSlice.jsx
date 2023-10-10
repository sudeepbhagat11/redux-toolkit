import { createSlice } from "@reduxjs/toolkit";
import { clearAllUser } from "../actions";

const UserSlice = createSlice({
    name : "user",
    initialState : [],
    reducers: {
        addUser(state,action){
            state.push(action.payload);
            console.log(action.payload);
         },
        removeUser(state,action){ 
            state.splice(action.payload,1);
        },
        // deleteUsers(state,action){
        //     return [];
            
        // }
    },
        // extraReducer tab use hota hai jab eak reducer kisi
        //  eak slice ma use huwa hai aur use kisi aur slice mei bhi use karna ho

        // extraReducers(builder){
        //     builder.addCase(UserSlice.actions.deleteUsers, () => {
        //         return [];
        //     })
        // }
        extraReducers(builder){
                builder.addCase(clearAllUser, () =>{
                    return [];
                });
                   
            }
});
// exporting reducer
export default UserSlice.reducer;
// exporting action creators
// export const { addUser,removeUser, deleteUsers } = UserSlice.actions;
export const { addUser,removeUser } = UserSlice.actions;