const ProfilePreviewForm = () =>{
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
                </div>
            </div>
        </>
    )
}