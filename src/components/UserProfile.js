import React, { useState } from 'react'
import profileImg from './assets/profileImg.jpg';

const UserProfile = ({ arr }) => {
    console.log("arr props : "+arr);

  return (

    <>
    <div className="profile-main-section">
                        <div className="user-profile">
                            <div className="user-img">
                                <img src={profileImg} alt="" />
                            </div>
                            <div className="user-info">
                                <div className="user-name text-3xl mb-1">
                                    <h3>{arr[0]}</h3>
                                </div>
                                <div className="user-username text-2xl opacity-60  mb-1">
                                    <h3>{arr[1]} • {arr[2]}</h3>
                                </div>
                                <div className="user-bio text-xl  mb-3">
                                    <h4>
                                        {arr[3]}
                                    </h4>
                                </div>
                                <div className="user-bio mb-1">
                                    <h4>
                                        {arr[7]}
                                    </h4>
                                </div>
                                <div className="user-bio mb-3">
                                    <h4>
                                        {arr[8]}
                                    </h4>
                                </div>
                            </div>
                            
                            <div className="user-social-links flex flex-col">
                                <a href={arr[4]} target='_blank'> <i class="zmdi zmdi-instagram material-icons-name">
                                </i> Instagram</a>

                                <a href={arr[5]} target='_blank'><i class="zmdi zmdi-twitter material-icons-name"></i> Twitter</a>

                                <a href={arr[6]} target='_blank'><i class="zmdi zmdi-linkedin material-icons-name"></i> Linkedin</a>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default UserProfile;