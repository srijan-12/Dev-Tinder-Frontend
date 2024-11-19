import { useSelector } from "react-redux"
import { appStore } from "../utils/appSTore"

export const NavBar = () =>{
    const userData = useSelector(appStore=>appStore.user);
    console.log(userData);
    return(
        <>
            <div className="navbar bg-base-300">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
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
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>}
            </div>
            </div>
        </>
)
}