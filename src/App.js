import { Home, Navbar, Newletter, Footer, Signup, Login, About, Courses, Study, Contact, Profile, Editprofile, Accountsettings, Leaderboard, Mainprofile, UserProfile,Subjectinfo } from './components/index';
// import {Route, Switch} from 'react-router-dom';
import {Route, Routes } from "react-router-dom";
import {gsap, Power3} from 'gsap';
import "./index.css";


const App = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
    <>
    <Navbar timeline = {tl} ease= {ease}/>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/profile' Component={Mainprofile} />
          <Route path='/courses' Component={Courses} />
          <Route path='/study' Component={Study} />
          <Route path='/signup' Component={Signup} />
          <Route path='/login' Component={Login}/>
          <Route path='/contact' Component={Contact} />
          <Route path='/leaderboard' Component={Leaderboard} />
          <Route path='/editprofile' Component={Editprofile} />
          <Route path='/account' Component={Accountsettings} />
          <Route path='/user' Component={UserProfile} />
          <Route path='/subjectinfo' Component={Subjectinfo} />
        </Routes>
        <Newletter/>
      <Footer/>
    </>
  );
}

export default App;
