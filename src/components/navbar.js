import React from "react";
import './navbar.css';
 const Navbar = () =>{
    return (
    <>
    <div className="nav-bg">
        <div className="nav-upper">
            <div className="logo">Logo</div>
            <div className="user-profile">
                <div className="login">Login</div>
                <div className="signup">Signup</div>
            </div>
        </div>
        {/* <hr /> */}
        <div className="nav-links">
            <ul className="nav-links-box">
                <li className="nav-link">About us</li>
                <li className="nav-link">Courses</li>
                <li className="nav-link">Study Material</li>
                <li className="nav-link">Contact us</li>
            </ul>
        </div>
    </div>
    </>
    )
 }

 export default Navbar;