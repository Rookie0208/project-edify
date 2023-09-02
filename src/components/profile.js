import React from 'react'
import {Link} from 'react-router-dom';
import './profile.css';
import Leaderboard from './Leaderboard';
import Editprofile from './Editprofile';
import Profilenavbar from './ProfileNavbar';
import Userprofile from './UserProfile';

const ProfilePage = () => {
    return (
        <>
            <section className="profile-section h-auto mt-4">
                <div className="profile-container">
                    
                    <Userprofile/>

                    <div className="user-achievements flex flex-col">
                        <div className="achievement-info ml-8 flex">
                            <div className="achievement-left-section">
                                <h2 className='user-achievement header text-3xl'>Achievements</h2>
                                <div className="user-achievement flex">
                                    <div className="batches"></div>
                                    <div className="batches"></div>
                                    <div className="batches"></div>
                                    <div className="batches"></div>

                                </div>

                            <div className="achievment-right-section flex">
                        <div className="rank scores text-xl">
                        <h4>Weekly Rank </h4> <h3>1st</h3>
                        </div>
                        
                        <div className="quizes scores text-xl">
                        <h4>Total Quiz Attempted </h4> <h3>100</h3>

                        </div>
                        <div className="exp scores text-xl">
                        <h4>Total exp earned </h4> <h3>1000</h3>

                        </div>
                            </div>
                            </div>
                        </div>

                        <div className="ongoing-courses ml-8 mt-8">
                            <h2 className='user-ongoing-courses header text-3xl'>Ongoing Courses</h2>
                            <div className="user-courses">
                        <div className="user-course"></div>
                        <div className="user-course"></div>
                        <div className="user-course"></div>
                        <div className="user-course"></div>
                            </div>
                        </div>

                        <div className="completed-courses ml-8 mt-8">
                            <h2 className='user-completed-courses header text-3xl'>Completed Course</h2>
                            <div className="user-courses">
                        <div className="user-course"></div>
                        <div className="user-course"></div>
                        <div className="user-course"></div>
                        <div className="user-course"></div>
                            </div>
                        </div>

                    </div>



                </div>
            </section>
        </>
    )
}

export default ProfilePage;