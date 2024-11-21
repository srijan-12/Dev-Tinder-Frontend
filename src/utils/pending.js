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
        }
    }
})

export const {addRequest, removeRequest} = pending.actions;
export default pending.reducer;