import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-container  flex justify-around">
                    <div className="right-footer">
                        <div className="f-logo">Edify</div>
                        <p className="footer-text">
                            Unlocking Knowledge, Empowering Minds
                        </p>
                        <div className="footer-links">
                            <div className="social-links">

                                <a href="https://www.instagram.com/amitrawat0208/" target='_blank'> <i class="zmdi zmdi-instagram material-icons-name">
                                </i></a>

                                <a href="https://twitter.com/AmitRawt1" target='_blank'><i class="zmdi zmdi-twitter material-icons-name"></i></a>

                                <a href="https://www.linkedin.com/in/amit-rawat-477130203/" target='_blank'><i class="zmdi zmdi-linkedin material-icons-name"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="left-footer flex">
                        <div className="footer-company flex flex-col mx-5">
                            <h4>Company</h4>

                            <a href=""><Link to="/About">About us </Link></a>
                            <a href=""><Link to="/Contact">Contact us </Link></a>
                        </div>
                        <div className="footer-courses flex flex-col mx-5">
                            <h4>Courses</h4>

                            <a href="">class 12th</a>
                            <a href="">class 11th</a>
                            <a href="">class 10th</a>
                            <a href="">class 9th</a>
                            <a href="">class 8th</a>
                            <a href="">class 7th</a>
                            <a href="">class 6th</a>
                        </div>
                        <div className="footer-study flex flex-col mx-5">
                            <h4>Ncert</h4>
                            <a href="">Maths</a>
                            <a href="">Physics</a>
                            <a href="">chemistry</a>
                            <a href="">English</a>
                        </div>
                    </div>
                </div>
                <div className="footer-lower">
                    <div className="lower-f-left">
                        <p> ©️ 2023 copyright</p>
                    </div>
                    <div className="lower-f-right flex ">
                        <p>All right reserved </p>
                        <a href="">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer