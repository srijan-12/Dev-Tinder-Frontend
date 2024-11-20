import axios from "axios"
import { backendBaseURL } from "../utils/constants"
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { addFeed } from "../utils/feedSlice"
import { appStore } from "../utils/appSTore"
import { UserInfocard } from "./UserInfoCard.jsx"
export const Feed = () =>{
    const dispatch = useDispatch();
    const feedArray = useSelector(appStore => appStore.feed)
    const callFeedApi = async() =>{
        if(feedArray) return;
        const res = await axios.get(`${backendBaseURL}/user/feed`,{withCredentials:true})
        dispatch(addFeed(res.data));
    }

    useEffect(()=>{
        callFeedApi();
    },[]);
    return(
        <div className="flex flex-col my-8">
            {feedArray && feedArray.map((user)=>{
                return <UserInfocard userInfo= {user} key={user._id}/>
            })}
        </div>
    )
}

