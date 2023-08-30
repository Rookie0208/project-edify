import React from 'react'
import { useState } from 'react';
// import Modal from '@material-ui/core/Modal';
import './signup.css'

const Signup = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <section className='signup'>
                <div className="container">
                    <div className="singup-content">

                        <div className="signup-img">
                            <div className='img-container'>
                                <img src="https://picsum.photos/460/800?grayscale" alt="image" />
                            </div>
                            {/* <div className="img-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ea, expedita sit dignissimos dolore possimus unde assumenda nulla rerum enim!
                                </p>
                            </div> */}
                        </div>

                        <div className="signup-form">
                            <div className="form-header">
                                <h2 className="form-title">Sign Up</h2>
                            </div>
                            <form action="" className="register-form" id='register-form'>
                                <div className="form-group ">
                                    <label htmlFor="name">
                                        My Name is
                                    </label>
                                    <input type="text" name='name' autoComplete='off' id='name' placeholder=' ' />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="college">
                                        I Study in
                                    </label>
                                    <input type="text" name='college' autoComplete='off' id='college' placeholder=' ' />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">
                                        This is my E-mail
                                    </label>
                                    <input type="email" name='email' autoComplete='off' id='email' placeholder=' ' />
                                </div>



                                <div className="form-group">
                                    <label htmlFor="password">
                                        Set My Password to
                                    </label>
                                    <input type="password" name='name' autoComplete='off' id='password' placeholder='' />
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
                                <h5>or register with</h5>
                            </div>
                            <div className="other-btn">
                                {/* <a href=""><i class="zmdi zmdi-google material-icons-name"></i></a>
                                <a href=""></a>
                                <a href=""></a> */}
                                <div className="social">
                                    <div className="google">
                                        <i class="zmdi zmdi-google material-icons-name"></i>google</div>
                                    <div className="facebook">
                                        <i class="zmdi zmdi-facebook material-icons-name"></i>facebook</div>
                                    <div className="linkedin">
                                        <i class="zmdi zmdi-linkedin material-icons-name"></i>linkedin</div>
                                </div>
                                <div className="footer-link">
                                    <h5 className='form-subtitle'>Already a member? <a href="#" className='login'><span onClick={handleOpen}>Login</span></a> </h5>

                                </div>
                            </div>
                        </div>

                        {/* <Modal onClose={handleClose}
                        open = {open}
                        > */}
                            <div className="signup-form active">
                                <div className="form-header">
                                    <h2 className="form-title">Sign In</h2>
                                </div>
                                <form action="" className="register-form" id='register-form'>
                                    <div className="form-group ">
                                        <label htmlFor="name">
                                            My Name is
                                        </label>
                                        <input type="text" name='name' autoComplete='off' id='name' placeholder=' ' />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="college">
                                            I Study in
                                        </label>
                                        <input type="text" name='college' autoComplete='off' id='college' placeholder=' ' />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="">
                                            This is my E-mail
                                        </label>
                                        <input type="email" name='email' autoComplete='off' id='email' placeholder=' ' />
                                    </div>



                                    <div className="form-group">
                                        <label htmlFor="password">
                                            Set My Password to
                                        </label>
                                        <input type="password" name='name' autoComplete='off' id='password' placeholder='' />
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
                                    <h5>or register with</h5>
                                </div>
                                <div className="other-btn">
                                    {/* <a href=""><i class="zmdi zmdi-google material-icons-name"></i></a>
                                <a href=""></a>
                                <a href=""></a> */}
                                    {/* <div className="social">
                                    <div className="google">
                                        <i class="zmdi zmdi-google material-icons-name"></i>google</div>
                                    <div className="facebook">
                                        <i class="zmdi zmdi-facebook material-icons-name"></i>facebook</div>
                                    <div className="linkedin">
                                        <i class="zmdi zmdi-linkedin material-icons-name"></i>linkedin</div>
                                </div> */}
                                    <div className="footer-link">
                                        <h5 className='form-subtitle'>Create new account <a href="#">signup</a> </h5>

                                    </div>
                                </div>
                            </div>
                        {/* </Modal> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;