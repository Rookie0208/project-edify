import React, { useState, useEffect, useCallback } from 'react'
import { Link } from "react-router-dom";
// import axios from 'axios';
import './courses.css';

const CourseCard = ({ courseData }) => {
    // console.log(courseData);

    return (
        <>
                <div className="courses-subject flex overflow-x-auto h-[25vh] mt-[20px] mb-[20px]">
            {courseData.map((currEle) => {
            const { id, tag, image, name, category, description } = currEle;
                return (
                    <>
                            <div className="subjects cursor-pointer" key={id}>
                                <div className="about-subject">
                                    <h3>{name}</h3>
                                </div>
                                <div className="about-desc">
                                    {/* <h4>{description}</h4> */}
                                </div>
                                <button className='openBtn p-2 bg-pink-300'>
                                    <Link to='/Subjectinfo'>Click</Link>
                                </button>
                            </div>
                    </>
                )
            })
            
        }
        </div>

        </>
    )
}

export default CourseCard;
