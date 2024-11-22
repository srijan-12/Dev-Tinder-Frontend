import { useState } from "react"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { backendBaseURL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

export const Login = () =>{
    const dispatch = useDispatch();


    const[firstName, setFirstname] = useState("Tanmay");
    const[lastName, setLastname] = useState("Aingh")
    const[email,setEmail] = useState("scout@gmail.com");
    const[phoneNumber, setPhoneNumber] = useState("765676565432")
    const[password, setPassword] = useState("k8dfh8c@Pfv0gB2");
    const[age, setAge] = useState("")
    const[gender, setGender] = useState("male")
    const[skills, setSkills] = useState([])
    const[about, setAbout] = useState("This is scout.")


    const [error, setError] = useState(null);
    const[isLoggedIn, setLoggedIn] = useState(true);
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

    const handleSignup = async () =>{
        try{
            const res = await axios.post(`${backendBaseURL}/signup`, {firstName,lastName,email,phoneNumber,password,age,gender,skills,about},{withCredentials:true});
            console.log(res);
            dispatch(addUser(res.data.user));
            navigator("/profile");
        }catch(err){
            console.log(err);
            setError(err.response.data);
        }
    }

    const handleFormStatus = () =>{
        console.log(isLoggedIn);
        return setLoggedIn(!isLoggedIn);
    }
    return (
        <>
            <div className="card bg-base-200 w-4/12 shadow-xl mx-auto my-16">
                <div className="card-body">
                    <h2 className="card-title">{isLoggedIn?"Login to your account":"Welcome to DEv-Tinder"}</h2>
                    <div>
                            <div className="flex flex-col">
                            {!isLoggedIn && <><input id="firstName" placeholder="First name" className="p-3 rounded-xl w-10/12 m-4" value={firstName} onChange={(e)=> setFirstname(e.target.value)}/>

                            <input id="lastname" placeholder="Last name" className="p-3 rounded-xl w-10/12 m-4" value={lastName} onChange={(e)=> setLastname(e.target.value)}/></>}

                                <input id="email" placeholder="e-mail" className="p-3 rounded-xl w-10/12 m-4" value={email} onChange={(e)=> setEmail(e.target.value)}/>

                                {!isLoggedIn && <input id="phoneNumber" placeholder="+91.." className="p-3 rounded-xl w-10/12 m-4" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>}

                                <input id="password" placeholder="password" className="p-3 rounded-xl w-10/12 m-4" value={password} onChange={(e)=> setPassword(e.target.value)}/>

                                {!isLoggedIn && <><input id="age" placeholder="Age" className="p-3 rounded-xl w-10/12 m-4" value={age} onChange={(e)=> setAge(e.target.value)}/>

                                <select className="select select-secondary p-3 rounded-xl w-10/12 m-4" value={gender} onChange={(e)=>setGender(e.target.value)}>
                                <option disabled value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>

                                <input id="skills" placeholder="Skills (comma-separated)" className="p-3 rounded-xl w-10/12 m-4" value={skills?.join(", ")} onChange={(e) => setSkills(e.target.value.split(",").map(skill => skill.trim()))} />

                                <input id="about" placeholder="About" className="p-3 rounded-xl w-10/12 m-4" value={about} onChange={(e)=> setAbout(e.target.value)}/></>}
                            </div>
                            <div className="card-actions justify-start ms-5 flex flex-col">
                                <p className="text-red-500">{error}</p>
                                <button className="btn btn-primary w-3/12 mt-2" onClick={isLoggedIn ? handleLogin : handleSignup}>{isLoggedIn?"log in":"sign up"}</button>
                            </div>
                            <p className="text-center text-sm cursor-pointer" onClick={handleFormStatus}>{isLoggedIn?"New user sign up?":"Existing user log in?"}</p>
                    </div>
                </div>      
            </div>
        </>
    )
}