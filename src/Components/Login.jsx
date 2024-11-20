import { useState } from "react"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { backendBaseURL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

export const Login = () =>{
    const dispatch = useDispatch();
    const[email,setEmail] = useState("amitsaha@gmail.com");
    const[password, setPassword] = useState("k8dfh8c@Pfv0gB2");
    const [error, setError] = useState(null);
    const navigator = useNavigate();
    const handleLogin = async () =>{
        try{
            const res = await axios.post(`${backendBaseURL}/login`, {email,password},{withCredentials:true});
            dispatch(addUser(res.data.user));
            navigator("/");
        }catch(err){
            setError(err.response.data.error);
            navigator("/login");
        }
    }
    return (
        <>
            <div className="card bg-base-200 w-4/12 h-[350px] shadow-xl mx-auto my-16">
                <div className="card-body">
                    <h2 className="card-title">Login to your account</h2>
                    <div>
                            <div className="flex flex-col">
                                <input id="username" placeholder="e-mail" className="p-3 rounded-xl w-10/12 m-4" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                <input id="password" placeholder="password" className="p-3 rounded-xl w-10/12 m-4" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                            </div>
                            <div className="card-actions justify-start ms-5 flex flex-col">
                                <p className="text-red-500">{error}</p>
                                <button className="btn btn-primary w-3/12 mt-2" onClick={handleLogin}>login</button>
                            </div>
                    </div>
                </div>      
            </div>
        </>
    )
}