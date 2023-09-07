import React, {useRef, useEffect} from "react";
import {Link} from 'react-router-dom';
import './navbar.css';
 const Navbar = ({timeline, ease}) =>{
    let logo = useRef(null);
    let login = useRef(null);
    let signup = useRef(null);
    let profile = useRef(null);
    let link1 = useRef(null);
    let link2 = useRef(null);
    let link3 = useRef(null);
    let link4 = useRef(null);

    useEffect(() => {
        timeline.from(logo, 0.8, {
            opacity: 0,
            y: -100,
        });
        timeline.from([login, signup, profile], 0.8, {
            opacity: 0,
            y: -100,
            stagger: {
                amount: .4
            },
            ease: ease
        })
        timeline.from([link1, link2, link3, link4], 0.5, {
            opacity: 0,
            y: -20,
            stagger: {
                amount: .4
            },
            ease: ease
        })
    },[]);
    return (
    <>
    <div className="nav-bg">
        <div className="nav-upper">
            <div className="logo" ref={ele => logo = ele}><Link to='/'> Edify </Link></div>
            {/* <div className="user-profile "> */}
                <ul className="nav-user-links">
                    <li className="login" ref={ele => login = ele} ><Link to='/Login'> Login </Link></li>
                    <li className="signup" ref={ele => signup = ele} > <Link to='/Signup'> Signup </Link></li>
                    <li className="profile" ref={ele => profile = ele} > <Link to='/Profile'> Profile </Link></li>
                </ul>
            {/* </div> */}
        </div>
        {/* <hr /> */}
        <div className="nav-links">
            <ul className="nav-links-box">
                <li className="nav-link link1" ref={ele => link1 = ele} >
                    <Link to="/About">About us </Link></li>
                <li className="nav-link link2" ref={ele => link2 = ele}>
                    <Link to="/Courses">Courses</Link></li>
                <li className="nav-link link3" ref={ele => link3 = ele}>
                <Link to="/Study">Study Material </Link></li>
                <li className="nav-link link4" ref={ele => link4 = ele}>
                <Link to="/Contact">Contact Us </Link></li>
            </ul>
        </div>
    </div>
    </>
    )
 }

 export default Navbar;