import React, { useState } from 'react'
import Course from './api/CourseApi';

const CoursesNav = ({filterItem, navList, courseData}) => {

  return (
    <>
    <ul className="course-nav-links2 overflow-x-auto">
        {navList.map((currEle) => {
            return (
                <>
                <li className="course-nav-link" id='c9' onClick={() => {
                    // console.log(currEle.standard.cc)
                    filterItem(currEle.category)}
                }>{currEle.cName}</li>
                </>
            )
        })}

        {/* {
            CoursesData.map((currEle) => {
                return (
                    <>
                    <li className="course-nav-link" id='c9' onClick={() => filterItem(currEle.category)}>{currEle.name}</li>
                    </>
                )
            })
        } */}

              {/* <li className="course-nav-link" id='c9' onClick={() => filterItem("9th")}>Class 9th</li>
              <li className="course-nav-link" id='c10' onClick={() => filterItem("10th")}>Class 10th</li>
              <li className="course-nav-link" id='c11' onClick={() => filterItem("11th")}>Class 11th</li>
              <li className="course-nav-link" id='c11' onClick={() => filterItem("12th")}>Class 12th</li> */}
            </ul>
    </>
  )
}
export default CoursesNav;
