import axios from "axios";
import {backendBaseURL} from "../utils/constants.js"
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { addConnections } from "../utils/userConnection.js";
import { appStore } from "../utils/appSTore.js";
export const Connections = () =>{
    const dispatch = useDispatch();

    const fetchConnections = async() =>{
       try{
        const result = await axios.get(`${backendBaseURL}/user/connections`, {withCredentials:true});
        dispatch(addConnections(result.data));
       }catch(err){
        console.log(err.message)
       }
    }
    useEffect(()=>{
        fetchConnections();
    },[])
    const connectionData = useSelector(appStore => appStore.connections);
    if(!connectionData) return
    if(connectionData.length === 0) return <h1 className="text-2xl text-bold text-center">No connection yet.</h1>
    return(
        <>
        <div className="w-4/12 mx-auto my-6">
        <h1 className="text-2xl text-bold">Connections</h1>
           {connectionData && connectionData.map((data)=>{
                return <>
                    
                        <div className="card bg-neutral text-neutral-content w-96 flex flex-row items-center my-4">
                            <div><img className="w-20 rounded-full" src={data.photoUrl} alt="" /></div>
                            <div className="card-body items-center text-center">
                                <div className="flex flex-row items-center gap-4">
                                    <h2 className="card-title">{data.firstName} {data.lastName}</h2>
                                    <div className="badge badge-secondary">{data.age}</div>
                                    <div className="badge badge-primary">{data.gender}</div>
                                </div>
                            </div>
                        </div>
                    
                </>
           })}
           </div>
        </>
    
    )
}


