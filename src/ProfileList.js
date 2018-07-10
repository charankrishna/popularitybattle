import React from 'react';
import ProfileCard from "./ProfileCard";



const ProfileList = ({props})=>(

    <div className="ui four cards">
        ({props.Users.map(User=> <ProfileCard User={User} key={User.id}/>)}
    </div>
)



export default ProfileList;