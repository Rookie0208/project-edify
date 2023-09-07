import React, { useRef, useEffect } from 'react'
import { gsap, Power4 } from "gsap";
import Courses from './courses'
import StudyZone from './StudyZone';
import { Link } from 'react-router-dom';

import './home.css';
import Popularcourse from './popularCourses';
const Home = () => {
  let tl = new gsap.timeline();
  let ease = Power4.easeOut();

  let home_subhead = useRef(null);
  let home_head = useRef(null);
  let home_btn = useRef(null);
  let btn = useRef(null);

  useEffect(() => {
    tl.to([home_head], 2.5, {
      opacity: 1,
      y: 0,
      'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      // 'clip-path': "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);",
      // skewY: 20,
      stagger: {
        amount: 1
      },
      ease: ease
    }, "-=1 ");

    tl.from([home_subhead], 1, {
      opacity: 0,
      y: -50,
      // skewX: -15,
            stagger: {
                amount: .3
            },
            ease: ease
    },"-=1");

    tl.to( btn, 3, {
      // 'clip-path': 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      opacity: 1,
      y: 0,
      stagger: {
        amount: .4
      },
      ease: ease,
    }, "-=1")
  },[]);

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

          <div className="home-inner-container home_inner_container" ref={el => btn = el}>
            <div className="home-heading">
              <h1 className="home_head" ref={ele => home_head = ele}>
                Learning is FUN, with our digit platform
              </h1>
            </div>
            <div className="home-subheading">
              <p className="home_subhead" ref={ele => home_subhead = ele}>
                we provide everything in a single place so that you
                don’t have to waste your time
                searching for it
              </p>
            </div>
            <button className='home_btn' ref={ele => home_btn = ele}> <Link to='/Signup'> Sign up </Link> </button>
          </div>
        </div>
      </section>

      <section className="page2 mb-10">
        <Courses />
        {/* Recommended Courses and all courses */}
        {/* add have queries section in place of newletter */}
        <Popularcourse/>
      </section>
      <section className="page3">
        {/* <StudyZone /> */}
      </section>
      <section className="page4">

      </section>
    </>
  )
}
export default Home;