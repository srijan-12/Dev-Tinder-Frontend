import { appStore } from "../utils/appSTore"
import { ProfileEditForm } from "./ProfileEditForm"
import {useSelector} from "react-redux"
export const Profile = () =>{
    const user = useSelector(appStore=>appStore.user)
    return (
        <>
            {user && <ProfileEditForm user = {user}/>}
        </>
    )
}