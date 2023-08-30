import React from 'react'
import {Link} from 'react-router-dom';

import './home.css';
const Home = () => {

  const blob = document.getElementById('blob');
  // document.body.onpointermove = (event) => {
  //   const { clientX, clientY } = event;
  //   // blob.style.left = `${clientX}px`;
  //   // blob.style.top = `${clientY}px`;
  //   blob.animate({
  //     left: `${clientX - 100}px`,
  //     top: `${clientY - 100}px`
  //   }, { duration: 3000, fill: "forwards" })
  // }

  return (
    <>
      <section className="home-page">
        <div id="blur"></div>
        <div id="blob"></div>
        <div className="home-outer-container">

          <div className="home-inner-container ">
            <div className="home-heading">
              <h1 className="home-head">
                Learning is FUN, with our digit platform
              </h1>
            </div>
            <div className="home-subheading">
              <p className="home-subhead">
                we provide everything in a single place so that you
                don’t have to waste your time
                searching for it
              </p>
            </div>
            <button className='home-btn'> <Link to='/Signup'> Sign up </Link> </button>
          </div>
        </div>
      </section>

      <section className="page2">

      </section>
    </>
  )
}
export default Home;