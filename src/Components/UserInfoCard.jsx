import axios from "axios"
import { backendBaseURL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { removeUserFromFeed } from "../utils/feedSlice";

export const UserInfocard = ({userInfo}) =>{
    const dispatch = useDispatch();
    const handleResponse = async(status,id) =>{
        const result = await axios.post(`${backendBaseURL}/request/send/${status}/${id}`,{},{withCredentials:true});
        console.log(result);
        dispatch(removeUserFromFeed(id));
    }
    return(
        <>
            <div className="card bg-base-300 w-96 shadow-xl my-8 mx-auto">
                <figure>
                    <img
                    src={userInfo.photoUrl}
                    alt="User Profile" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {userInfo.firstName} {userInfo.lastName}
                    <div className="badge badge-secondary">{userInfo.age}</div>
                    <div className="badge badge-primary">{userInfo.gender}</div>
                    </h2>
                    <p>{userInfo.about}</p>
                    <div className="card-actions justify-end">
                    {userInfo.skills?userInfo.skills.map((skill)=> {return <div className="badge badge-outline" key = {skill}>{skill}</div>}) : null }
                    </div>

                    <div className="flex justify-between">
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={()=> handleResponse("ignored",userInfo._id)}>Ignore</button>
                        </div>

                        <div className="card-actions justify-end">
                            <button className="btn btn-secondary" onClick={()=> handleResponse("intrested",userInfo._id)}>Interested</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



