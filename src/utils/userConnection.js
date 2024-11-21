import {createSlice} from "@reduxjs/toolkit"
const userConnection = createSlice({
    name : "UserConnections",
    initialState : null,
    reducers: {
        addConnections : (state,action) =>{
            return action.payload;
        },
        removeConnection : (state,action)=>{
            return null;
        }
    }
})

export const {addConnections, removeConnection} = userConnection.actions;
export default userConnection.reducer;