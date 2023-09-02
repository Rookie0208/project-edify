import React from "react";
import {Link} from 'react-router-dom';
import './navbar.css';
 const Navbar = () =>{
    return (
    <>
    <div className="nav-bg">
        <div className="nav-upper">
            <div className="logo"><Link to='/'> Edify </Link></div>
            {/* <div className="user-profile "> */}
                <ul className="nav-user-links">
                    <li className="login"><Link to='/Login'> Login </Link></li>
                    <li className="signup"> <Link to='/Signup'> Signup </Link></li>
                    <li className="profile"> <Link to='/Profile'> Profile </Link></li>
                </ul>
            {/* </div> */}
        </div>
        {/* <hr /> */}
        <div className="nav-links">
            <ul className="nav-links-box">
                <li className="nav-link">
                    <Link to="/About">About us </Link></li>
                <li className="nav-link">
                    <Link to="/Courses">Courses</Link></li>
                <li className="nav-link">
                <Link to="/Study">Study Material </Link></li>
                <li className="nav-link">
                <Link to="/Contact">Contact Us </Link></li>
            </ul>
        </div>
    </div>
    </>
    )
 }

 export default Navbar;