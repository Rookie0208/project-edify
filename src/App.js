import { Home, Navbar, Newletter, Footer, Signup, Login, About, Courses, Study, Contact } from './components/index';
// import {Route, Switch} from 'react-router-dom';
import {Route, Routes } from "react-router-dom";

import "./index.css";


const App = () => {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/courses' Component={Courses} />
          <Route path='/study' Component={Study} />
          <Route path='/signup' Component={Signup} />
          <Route path='/login' Component={Login}/>
          <Route path='/contact' Component={Contact} />
        </Routes>
        <Newletter/>
      <Footer/>
    </>
  );
}

export default App;
