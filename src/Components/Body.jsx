import { Outlet, useNavigate } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"
import axios from "axios"
import { backendBaseURL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useEffect } from "react"
import { appStore } from "../utils/appSTore"

export const Body = () =>{
    const dispatch = useDispatch();
    const navigator = useNavigate()
    const userData = useSelector(appStore=>appStore.user);
    const fetchUser = async()=>{
       try{
        if(userData) return
        const res  = await axios.post(`${backendBaseURL}/profile/view`,{},{withCredentials:true})
        console.log("called")
        dispatch(addUser(res.data));
       }catch(err){
        navigator("/login")
       }
        
    }
    useEffect(() => {
        fetchUser();
      },[]);
    
    return(
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}