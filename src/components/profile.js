import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import achievement1 from './assets/18407468_5995355.svg';
import './profile.css';
import Leaderboard from './Leaderboard';
import Editprofile from './Editprofile';
import Profilenavbar from './ProfileNavbar';
import Userprofile from './UserProfile';

const ProfilePage = () => {
      // const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState(false);
  const [name, setName] = useState('Amit Rawat');
  const [userName, setUserName] = useState('Rookie0208');
  const [pronoun, setPronoun] = useState('he/him');
  const [bio, setBio] = useState('A junior software engineer (student) with good catch in C++ and Web Development.');
  const [school, setSchool] = useState(false);
  const [twitter, setTwitter] = useState('https://twitter.com/AmitRawt1');
  const [insta, setInsta] = useState('https://www.instagram.com/amitrawat0208/');
  const [linkedin, setLinkedin] = useState('https://www.linkedin.com/in/amit-rawat-477130203/');
  // const [college, setCollege] = useState(false);

  let arr ;
  if(setValues) {
    arr = [name,userName,pronoun,bio, insta, twitter, linkedin];
  }
  console.log("arr values : "+arr);

  const handleCancelClick = () => {
    setValues(true);
  };

  const handleSaveClick = () => {
    setValues(false);
  };

  const showSchool = () => {
    setSchool(true);
  }
  const showCollege = () => {
    setSchool(false);
  }

    return (
        <>
            <section className="profile-section mt-4">
                <div className="profile-container">
                    
                    <Userprofile arr={arr}/>

                    <div className="user-achievements flex flex-col">
                        <div className="achievement-info ml-8 flex">
                            <div className="achievement-left-section">
                                <h2 className='user-achievement header text-3xl'>Achievements</h2>
                                <div className="user-achievement flex">
                                    <div className="batches">
                                <img src={achievement1} alt="" />
                                    </div>
                                    <div className="batches">
                                <img src={achievement1} alt="" />
                                    </div>
                                    <div className="batches">
                                <img src={achievement1} alt="" />
                                    </div>
                                    <div className="batches">
                                <img src={achievement1} alt="" />
                                    </div>

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