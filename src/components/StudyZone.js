import React from 'react'
import StudyCard from './studyCard';
import './studyMaterial.css';

const Study = () => {
    return (
        <>
            <section className="study-section ">
                <div className="study-container">
                    <div className="study-header">
                        <h1>Study Material</h1>
                    </div>
                    <div className="study-materials">
                    <StudyCard />
                    {/* <StudyCard /> */}
                    </div>
                        
                </div>
            </section>
        </>
    )
}
export default Study;
