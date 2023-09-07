import React, { useState } from 'react'
import Profilenavbar from './ProfileNavbar';
import './EditProfile.css';
import UserProfile from './UserProfile';
import { Link } from 'react-router-dom';

const Editprofile = () => {
  // const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState(true);
  const [name, setName] = useState('Amit Rawat');
  const [userName, setUserName] = useState('Rookie0208');
  const [pronoun, setPronoun] = useState('he/him');
  const [bio, setBio] = useState('A junior software engineer (student) with good catch in C++ and Web Development.');
  const [email, setEmail] = useState('amitsr2612@gmail.com');
  const [num, setNum] = useState('+918368550169');
  const [school, setSchool] = useState(false);
  const [std, setStd] = useState(false);
  const [twitter, setTwitter] = useState('https://twitter.com/AmitRawt1');
  const [insta, setInsta] = useState('https://www.instagram.com/amitrawat0208/');
  const [linkedin, setLinkedin] = useState('https://www.linkedin.com/in/amit-rawat-477130203/');
  // const [college, setCollege] = useState(false);

  let arr;
  // function fillArray(setValues) {
  if (values) {
    arr = [name, userName, pronoun, bio, insta, twitter, linkedin, email, num];
  }
  // }
  console.log("arr values : " + arr);

  const handleCancelClick = () => {
    setValues(false);

  };

  const handleSaveClick = () => {
    setValues(true);
  };

  const showSchool = () => {
    setSchool(true);
  }
  const showCollege = () => {
    setSchool(false);
  }
  const showStd = () => {
    setStd(true);
  }

  return (
    <>
      <div className="profile-sec-outer flex">

        <Profilenavbar />
        <section className="profile-section h-auto mt-4 mr-[10px]">
          <div className="edit-profile-main-section flex">
            <UserProfile arr={arr} />
            <div className="edit-section ml-[20px] border-r-2">
              <div className="personal-fields mb-[20px]">

                <h3 className='edit-header text-2xl'>Personal info</h3>
                <div className="fields">
                  <label htmlFor="name">name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='input-field border-2' />
                </div>
                <div className="fields">
                  <label htmlFor="name">username</label>
                  <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='input-field border-2' />
                </div>
                <div className="fields">
                  <label htmlFor="name">pronoun</label>
                  <input type="text" value={pronoun} onChange={(e) => setPronoun(e.target.value)} className='input-field border-2' />
                </div>
                <div className="fields">
                  <label htmlFor="name">bio</label>
                  <textarea name="bio" value={bio} onChange={(e) => setBio(e.target.value)} className='input-field border-2' cols="50" rows="3"></textarea>
                </div>
                <div className="fields">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='input-field border-2' />
                </div>
                <div className="fields">
                  <label htmlFor="phoneNo">Phone-no</label>
                  <input type="tel" value={num} onChange={(e) => setNum(e.target.value)} className='input-field border-2' />
                </div>
              </div>

              <div className="social-fields">
                <h3 className='edit-header text-2xl'>Social Accounts</h3>
                <div className="fields flex flex-col">
                  <div className="social-field">
                    <i class="zmdi zmdi-twitter material-icons-name mr-2"></i>
                    <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} className='input-field border-2' />
                  </div>
                  <div className="social-field">
                    <i class="zmdi zmdi-instagram material-icons-name mr-2"></i>
                    <input type="text" value={insta} onChange={(e) => setInsta(e.target.value)} className='input-field border-2' />
                  </div>
                  <div className="social-field">
                    <i class="zmdi zmdi-linkedin material-icons-name mr-2"></i>
                    <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} className='input-field border-2' />

                  </div>
                  <div className="social-field">
                    <i class="zmdi zmdi-link material-icons-name mr-2"></i>
                    <input type="text" className='input-field border-2' />

                  </div>
                  <div className="social-fields">
                    <i class="zmdi zmdi-link material-icons-name mr-2"></i><input type="text" className='input-field border-2' />

                  </div>
                </div>
                <div className="submit-buttons">
                  <button className='saveBtn' onClick={handleSaveClick}>
                    Save</button>
                  <button className='cancelBtn' onClick={handleCancelClick}>cancel</button>
                </div>
              </div>
            </div>
            <div className="basic-details ml-[10px]">
              <div className="basic-details-header">
                <h3 className="basic-details-header text-2xl" >Basic Details</h3>
                <div className="designation flex">
                  <div className="des" onClick={showSchool}>School</div>
                  <div className="des" onClick={showCollege}>College</div>
                </div>
                {
                  school ? (
                    <div className="school-form">
                      <div className="fields">
                        <label htmlFor="school">School Name</label>
                        <input type="text" className='input-field border-2' />
                      </div>
                      <div className="fields">
                        <label htmlFor="standard">Class</label>
                        {/* <input type="text" className='input-field border-2' /> */}
                        <div className="btn-class-field">

                          <button onClick={showStd} >class 12 (PCM)</button>
                          <button onClick={showStd} >class 12 (PCB)</button>
                          <button onClick={showStd} >class 12 (Commerce)</button>
                          <button onClick={showStd} >class 11 (Commerce)</button>
                          <button onClick={showStd} >class 11 (PCM)</button>
                          <button onClick={showStd} >class 11 (PCB)</button>
                          <button onClick={showStd} >class 10</button>
                          <button onClick={showStd} >class 9</button>
                          <button onClick={showStd} >class 8</button>
                          <button onClick={showStd} >class 7</button>
                          <button onClick={showStd} >class 5</button>
                          <button onClick={showStd} >class 4</button>
                          <button onClick={showStd} >class 3</button>
                          <button onClick={showStd} >class 2</button>
                          <button onClick={showStd} >class 1</button>
                        </div>
                      </div>
                      {
                        std ? (
                          <div className="fields">
                            <label htmlFor="board">Select Board</label>
                            <div className="board-btn">
                              <button onClick={() => showStd} >CBSE</button>
                              <button onClick={() => showStd} >ICSE</button>
                              <button onClick={() => showStd} >UP</button>
                              <button onClick={() => showStd} >Others</button>

                            </div>
                          </div>

                        ) : (
                          <div className="empty-field"></div>

                        )
                      }
                    </div>

                  ) : (
                    <div className="college-form">
                      <div className="fields">
                        <label htmlFor="instititue">Institute Name</label>
                        <input type="text" className='input-field border-2' />
                      </div>
                      <div className="fields">
                        <label htmlFor="qualification">Qualification</label>
                        {/* <input type="text" className='input-field border-2' /> */}
                        {/* <DropdownList value = {value} onChange={(nextValue)=> setValue(nextValue)} data = {["b.tech", "bsc"]}/> */}
                        <select name="branches" id="branches" className='input-field border-2'>
                          <option value="select">select</option>
                          <option value="btech">B.tech</option>
                          <option value="bsc">B.Sc</option>
                          <option value="bcom">B.Com</option>
                          <option value="mba">MBA</option>
                        </select>
                      </div>
                      <div className="fields">
                        <label htmlFor="passingYear">Year of Passing</label>
                        <input type="text" className='input-field border-2' />
                      </div>
                    </div>
                  )
                }
                <div className="submit-buttons">
                  <button className='saveBtn' onClick={handleSaveClick}>
                    Save</button>
                  <button className='cancelBtn' onClick={handleCancelClick}>cancel</button>
                </div>

              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

export default Editprofile