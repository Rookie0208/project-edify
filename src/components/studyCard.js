import React from 'react'

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
                                </div>
                            </>
                        )
                    })}

            </div>
        </>
    )
}

export default StudyCard;
