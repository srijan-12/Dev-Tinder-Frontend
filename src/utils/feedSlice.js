import { createSlice } from "@reduxjs/toolkit";

const feed = createSlice({
    name : "Feed",
    initialState: null,
    reducers:{
        addFeed : (state,action)=>{
            return action.payload;
        },
        removeFeed : (state, action)=>{
            return null
        },
        removeUserFromFeed : (state,action)=>{
            const newFeed = state.filter((u)=>u._id !== action.payload);
            return newFeed;
        }
    }
})

export const {addFeed, removeFeed, removeUserFromFeed} = feed.actions;
export default feed.reducer;