import { useDispatch, useSelector } from "react-redux"
import { appStore } from "../utils/appSTore"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { backendBaseURL } from "../utils/constants";
import { removeFeed } from "../utils/feedSlice";

export const NavBar = () =>{
    const userData = useSelector(appStore=>appStore.user);
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const handleLogOut = async() =>{
        try{
            const res = await axios.post(`${backendBaseURL}/logout`,{},{withCredentials:true});
            dispatch(removeUser());
            dispatch(removeFeed());
            navigator("/")
        }catch{
            console.log(err.message)
            navigator("/");
        }
    }
    return(
        <>
            <div className="navbar bg-base-300">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">DEv Tnder</Link>
            </div>
            <div className="flex-none gap-2">

            {userData && <div className="dropdown dropdown-end me-6">
                <div className="flex items-center">
                    <p className="text-xs me-2">Welcome, {userData.firstName}</p>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                            alt="User"
                            src={userData.photoUrl} />
                        </div>
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <Link to="/profile" className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </Link>
                    </li>
                    <li><a>Settings</a></li>
                    <li><Link onClick={handleLogOut} to="/login">Logout</Link></li>
                </ul>
            </div>}
            </div>
            </div>
        </>
)
}