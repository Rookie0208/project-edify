import React,{ useState, useEffect, useCallback } from 'react'
// import { Link, useParams } from "react-router-dom";
// import axios from 'axios';
import './courses.css';

const CourseCard = () => {

    // const { classId } = useParams();
    // const [Class_Sub, setClassSub] = useState([]);
  
    // const fetchCourseData = useCallback( async () => {
    //   const response = await axios.get('/api/playlist');
    //   setClassSub(response.data.filter(items => items.class === classId)[0].subject_detail)
    // },[classId])
  
    // useEffect(() => {
    //   fetchCourseData();
    // }, [fetchCourseData]);

    return (
        <>
            <div className="courses-subject">
                <div className="subjects">
                    <div className="about-subject">
                        <h3>Physics</h3>
                        {/* {Class_Sub.map((items,index) => (
                            <Link to={`/class/${classId}/${items.subjectName}`} key = {index} >
                                <div className='subject-name-header'>
                                {items.subjectName}
                                </div>
                            </Link>
                        ))} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard;
