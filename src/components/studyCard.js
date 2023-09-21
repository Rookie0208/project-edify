import React from 'react'
import { Link } from "react-router-dom";

const StudyCard = ({ studyData }) => {
    return (
        <>
            <div className="material-container">
                {
                    studyData.map((currEle) => {
                        return (
                            <>
                                <div className="materials">
                                    <div className="about-material">
                                        <h3>{currEle.sName}</h3>
                                    </div>
                                    <button className='openBtn p-3'>
                                    <Link to='/Subjectinfo'>Click</Link>
                                </button>
                                </div>
                            </>
                        )
                    })}

            </div>
        </>
    )
}

export default StudyCard;
