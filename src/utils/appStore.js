import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.js" 
import feedReducer from "./feedSlice.js"
import connectionReducer from "./userConnection.js"
import pendingReducer from "./pending.js"
export const appStore = configureStore({
    reducer:{
        user : userReducer,
        feed : feedReducer,
        connections : connectionReducer,
        pending : pendingReducer
    }
})
