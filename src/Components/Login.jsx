import { useState } from "react"
import axios from "axios";
export const Login = () =>{
    const[email,setEmail] = useState("amitsaha@gmail.com");
    const[password, setPassword] = useState("k8dfh8c@Pfv0gB2");
    const handleLogin = async () =>{
        try{
            const res = await axios.post("http://localhost:3000/login", {email,password},{withCredentials:true});
        }catch(err){
            console.log(err.message)
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
                            <div className="card-actions justify-start ms-5 ">
                                <button className="btn btn-primary w-3/12 mt-2" onClick={handleLogin}>login</button>
                            </div>
                    </div>
                </div>      
            </div>
        </>
    )
}