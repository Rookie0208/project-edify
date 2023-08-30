import React from 'react'
import './courses.css';
import CourseCard from './courseCard';


const Courses = () => {
  return (
    <>
      <section className="courses-section">
        <div className="courses-container">
          <div className="course-header">
            <h1>Explore Courses</h1>
          </div>
          <div className="course-navigation">
            <ul className='course-nav-links'>
              <li className='course-nav-link' id='c1'>K-3</li>
              <li className='course-nav-link' id='c2'>4-8</li>
              <li className='course-nav-link active' id='c3'>9-12</li>
              <li className='course-nav-link' id='c4'>University</li>
            </ul>

            {/* This part will be rendered according to the button clicked in above links */}
            <ul className="course-nav-links2">
              <li className="course-nav-link" id='c9'>Class 9th</li>
              <li className="course-nav-link" id='c10'>Class 10th</li>
              <li className="course-nav-link" id='c11'>Class 11th</li>
              <li className="course-nav-link active" id='c11'>Class 12th</li>
            </ul>
          </div>

          <CourseCard/>
          
        </div>

      </section>
    </>
  )
}

export default Courses;