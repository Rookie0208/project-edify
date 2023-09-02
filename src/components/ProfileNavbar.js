import React from 'react'
import {Link } from 'react-router-dom'

const Profilenavbar = () => {
    return (
        <>
            <div className="profile-side-navbar">
                <ul className="profile-nav-links">
                    <li className="nav-link"><Link to='/profile'> Profile </Link></li>
                    <li className="nav-link">
                        <Link to='/leaderboard'> Leaderboard </Link></li>
                    <li className="nav-link"> <Link to='/Editprofile'> Edit Profile </Link></li>
                    <li className="nav-link"> <Link to='/Accountsettings'> Account Settings </Link></li>
                    {/* <li className="nav-link">Profile</li> */}
                    <li className="nav-link">Logout</li>
                </ul>
            </div>

        </>
    )
}

export default Profilenavbar;