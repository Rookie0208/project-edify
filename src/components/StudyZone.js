import React, { useState } from 'react'
import StudyCard from './studyCard';
import Material from './api/StudyMaterialApi';
import './studyMaterial.css';

const Study = () => {
    const [studyData, setStudyData] = useState(Material);
    return (
        <>
            <section className="study-section w-[90vw]">
                <div className="study-container">
                    <div className="study-header">
                        <h1>Study Material</h1>
                    </div>
                    <div className="study-materials">
                    <StudyCard studyData={studyData} />
                    {/* <StudyCard /> */}
                    </div>
                        
                </div>
            </section>
        </>
    )
}
export default Study;
