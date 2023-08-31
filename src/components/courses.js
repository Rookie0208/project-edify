import React, { useState } from 'react'
import './courses.css';
import CourseCard from './courseCard';
import CoursesNav from './CoursesNav';
import Course from './api/CourseApi';
import List from './api/CourseNavList';

const uniqueNav = [
  ...new Set(Course.map((currEle) => {
  return currEle.category;
})
)];
console.log(uniqueNav);

const Courses = () => {
  const [courseData, setCourseData] = useState(Course);
  const [navList, setNavList] = useState(List);
  // console.log(courseData);


  const filterItem = (category) => {
    const updatedList = Course.filter((currEle) => {
      return currEle.category === category;
    });
    setCourseData(updatedList);
  }

  const filterList = (category) => {
    const updatedList = List.filter((currEle) => {
      return currEle.category === category;
    });
    setNavList(updatedList);
  }

  return (
    <>
      <section className="courses-section">
        <div className="courses-container">
          <div className="course-header">
            <h1>Explore Our Courses</h1>
          </div>
          <div className="course-navigation">
            <ul className='course-nav-links'>
              <li className='course-nav-link' id='c1' onClick={() => filterList("k3")}>1-3</li>
              <li className='course-nav-link' id='c2' onClick={() => filterList("4")}>4-8</li>
              <li className='course-nav-link' id='c3' onClick={() => filterList("9")}>9-12</li>
              <li className='course-nav-link' id='c4' onClick={() => filterList("uni")}>University</li>
            </ul>

            {/* This part will be rendered according to the button clicked in above links */}
            <CoursesNav filterItem={filterItem} navList={navList} courseData={courseData}/>
          </div>

          <CourseCard courseData={courseData} />
          
        </div>

      </section>
    </>
  )
}

export default Courses;