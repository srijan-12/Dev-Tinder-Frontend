import { createSlice } from "@reduxjs/toolkit";
const pending = createSlice({
    name : "pendig",
    initialState : null,
    reducers : {
        addRequest : (state,action)=>{
            return action.payload
        },
        removeRequest : (state,action) =>{
            const newArray = state.filter((r)=> r._id !== action.payload)
            return newArray;
        },
        removePendingResquest : (state, action)=>{
            return null
        }
    }
})

export const {addRequest, removeRequest, removePendingResquest} = pending.actions;
export default pending.reducer;