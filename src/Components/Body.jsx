import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"

export const Body = () =>{
    return(
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}