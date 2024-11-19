import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "UserDetails",
    initialState : null,
    reducers : {
        addUser : (state,action)=>{
            return action.payload
        },
        removeUser : (state, action) =>{
            return null
        }
    }
})
console.log(userSlice);
export const{addUser, removeUser} = userSlice.actions;
export default userSlice.reducer