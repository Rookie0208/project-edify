import React from 'react'
import {Link} from 'react-router-dom';
import './login.css';

const Login = () => {
    return (
        <>
        <div className="login h-screen mb-10">
            <div className="container">
                <div className="login-content">

                <div className="login-img">
                            <div className='img-container'>
                                <img src="https://picsum.photos/460/800?grayscale" alt="image" />
                            </div>
                            {/* <div className="img-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ea, expedita sit dignissimos dolore possimus unde assumenda nulla rerum enim!
                                </p>
                            </div> */}
                        </div>

                <div className="login-form active">
                <div className="form-header">
                    <h2 className="form-title">Login</h2>
                </div>
                <form action="" className="register-form" id='register-form'>
                    <div className="form-group">
                        <label htmlFor="">
                            This is my E-mail
                        </label>
                        <input type="email" name='email' autoComplete='off' id='email' placeholder=' ' />
                    </div>
                    

                    <div className="form-group">
                        <label htmlFor="cPass">
                            My Password is
                        </label>
                        <input type="password" name='cPass' autoComplete='off' id='cPass' placeholder=' ' />
                    </div>

                    <div className="form-btn">
                        <input type="submit" name='signup' id='signup' value='Register' className='form-submit' />
                    </div>
                </form>

                <div className="lower-text">
                    <h5>or login with</h5>
                </div>
                <div className="other-btn">
                    {/* <a href=""><i class="zmdi zmdi-google material-icons-name"></i> Google </a> */}
                                
                    <div className="social">
                                    <div className="google w-full">
                                        <i class="zmdi zmdi-google material-icons-name"></i>google</div>
                                </div>
                    <div className="footer-link">
                        <h5 className='form-subtitle'>Not a member !?  <Link to='/Signup'>Signup</Link></h5>

                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Login;