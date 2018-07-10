import React from "react";


const ProfileCard =({User})=>(

    <div className="ui special cards">
        <div className="ui card">
            <div className="blurring dimmable image">
                <div className="ui dimmer">
                    <div className="content">
                        <div className="center">
                            <div className="ui inverted button">Add Friend</div>
                        </div>
                    </div>
                </div>
                <img src={User.Image}/>
            </div>
            <div className="content">
                <a className="header">{User.Name}</a>
                <div className="meta">
                    <span className="date">Created in {User.Date}</span>
                </div>
            </div>
            <div className="extra content ">
                <span className="right floated">
                <a>
                   <i className="thumbs down icon" onClick={User.onClickDisLike.bind(this)} ></i>
                    {User.DisLike}
                </a>
            </span>
               <span className="left aligned">
                   <a>
                    <i className="thumbs up icon " onClick={User.onClickLike.bind(this)}></i>
                       {User.Like}
                </a>
               </span>
            </div>
        </div>
    </div>
)

export default ProfileCard;