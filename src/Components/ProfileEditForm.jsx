import { useState } from "react"
import axios from "axios"
import {backendBaseURL} from "../utils/constants.js"
import {useDispatch, useSelector} from "react-redux"
import { addUser } from "../utils/userSlice.js"
export const ProfileEditForm = ({user}) =>{
    const[fName, setFName] = useState(user.firstName)
    const[lName, setLName] = useState(user.lastName)
    const[phoneNo, setPhoneNo] = useState(user.phoneNumber)
    const[age, setAge] = useState(user.age)
    const[gender, setGender] = useState(user.gender)
    const[photoUrl, setPhotoURL] = useState(user.photoUrl)
    const[skills, setSkills] = useState(user.skills)
    const[about, setAbout] = useState(user.about);
    const loggedInUser = useSelector(appStore => appStore.user)
    const updatedUser = {...loggedInUser,firstName:fName,lastName:lName,phoneNumber:phoneNo,age,gender,photoUrl,skills,about};
    const dispatch = useDispatch();
    const[error, setError] = useState("");
    const [alert,setAlert] = useState(false);


    const saveUpdatedData = async() =>{
        try{
            setError("")
            const res = await axios.patch(`${backendBaseURL}/profile/edit`,updatedUser, {withCredentials:true});
            console.log(res);
            dispatch(addUser(updatedUser));
            setAlert(true);
            setTimeout(()=>{
                setAlert(false)
            },3000)
        }catch(err){
            console.log(err);
            setError(err.response.data)
        }
    }

    return(
    <>
    {alert && <div className="toast toast-top toast-center">
        <div className="alert alert-success">
            <span>Profile updated.</span>
        </div>
    </div>}
        <div className="flex m-20 justify-around">
            {user && <div className="card bg-base-200 w-4/12 h-full shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Edit your profile</h2>
                    <div>
                            <div className="flex flex-col">

                                <input id="username" placeholder="First Name" className="p-3 rounded-xl w-10/12 m-4" value={fName} onChange={(e)=>setFName(e.target.value)}/>


                                <input id="password" placeholder="Last Name" className="p-3 rounded-xl w-10/12 m-4" value={lName} onChange={(e)=>setLName(e.target.value)}/>


                                <input id="username" placeholder="Phone Number" className="p-3 rounded-xl w-10/12 m-4" value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)}/>


                                <input id="password" placeholder="Age" className="p-3 rounded-xl w-10/12 m-4" value={age} onChange={(e)=>setAge(e.target.value)}/>


                                <select className="select select-secondary p-3 rounded-xl w-10/12 m-4" value={gender} onChange={(e)=>setGender(e.target.value)}>
                                <option disabled value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>


                                <input id="password" placeholder="Photo URL" className="p-3 rounded-xl w-10/12 m-4" value={photoUrl} onChange={(e)=>setPhotoURL(e.target.value)}/>


                                <input id="skills" placeholder="Skills (comma-separated)" className="p-3 rounded-xl w-10/12 m-4" value={skills.join(", ")} onChange={(e) => setSkills(e.target.value.split(",").map(skill => skill.trim()))} />



                                <textarea placeholder="Bio" className="textarea textarea-secondary textarea-md p-3 rounded-xl w-10/12 m-4" onChange={(e)=>setAbout(e.target.value)} value={about}/>


                            </div>
                            <div className="card-actions justify-start ms-5 flex flex-col justify-center">
                                {error && <p className="text-red-500">{error}</p>}
                                <button className="btn btn-primary w-3/12 mt-2" onClick={saveUpdatedData}>Save</button>
                            </div>
                    </div>
                </div>      
            </div>}




            <div className="card bg-base-300 w-96 shadow-xl">
                <figure>
                    <img
                    src={photoUrl}
                    alt="User Profile" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {fName} {lName}
                    <div className="badge badge-secondary">{age}</div>
                    <div className="badge badge-primary">{gender}</div>
                    </h2>
                    <p>{about}</p>
                    <div className="card-actions justify-end">
                    {skills?skills.map((skill)=> {return <div className="badge badge-outline" key = {skill}>{skill}</div>}) : null }
                    </div>
                </div>
            </div>


        </div>
        </>
    )
}





