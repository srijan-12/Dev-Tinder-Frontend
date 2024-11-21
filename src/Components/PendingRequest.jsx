import axios from "axios"
import { backendBaseURL } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addRequest, removeRequest } from "../utils/pending"
import { appStore } from "../utils/appSTore"

export const PendingRequest = () =>{
    const dispatch = useDispatch();

    const allPendingrequests = async() =>{
        try{
            const result = await axios.get(`${backendBaseURL}/user/requests/pending`,{withCredentials:true})
            dispatch(addRequest(result.data));
            
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        allPendingrequests();
    },[]);


    const handleReview = (status,id) =>{
        const result = axios.post(`${backendBaseURL}/request/review/${status}/${id}`,{},{withCredentials:true});
        console.log(result);
        dispatch(removeRequest(id));
    }

    const requestData = useSelector(appStore=>appStore.pending)
    console.log(requestData);
    if(!requestData) return <div className="flex justify-center">Some error occured</div>
    if(requestData.length === 0) return <div className="flex justify-center">No pending request</div>
    return (
        <>
            {requestData && requestData.map((data)=>{
                return(
                    <div className="flex justify-center">
                        <div className="card bg-neutral text-neutral-content w-5/12 flex flex-row items-center my-4">
                    <div className="mx-1"><img className="w-20 rounded-full" src={data.fromUserId.photoUrl} alt="" /></div>
                    <div className="card-body items-center text-center">
                        <div className="flex flex-row items-center gap-4">
                            <h2 className="card-title text-sm">{data.fromUserId.firstName} {data.fromUserId.lastName}</h2>
                            <div className="badge badge-secondary text-sm">{data.fromUserId.age}</div>
                            <div className="badge badge-primary text-sm">{data.fromUserId.gender}</div>
                            <div className="flex justify-between">
                                <div className="card-actions justify-end mx-2">
                                    <button className="btn btn-primary text-sm" onClick={()=> handleReview("rejected",data._id)}>Reject</button>
                                </div>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-secondary text-sm" onClick={()=> handleReview("accepted", data._id)}>Accept</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                )
            }) }
        </>
    )
}