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

    if(!feedArray) return <h1>Something went wrong</h1>
    if(feedArray <=0) return <h1 className="text-center text-bold text-3xl">No more users to add</h1>
    return(
        <div className="flex flex-col my-8">
            {feedArray && <UserInfocard userInfo= {feedArray[0]} key={feedArray[0]._id}/>}
        </div>
    )
}

