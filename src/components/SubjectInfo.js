import React from 'react'
import './subjectInfo.css'

const Subjectinfo = () => {
    return (
        <>
            <div className="subject-info-section">
                <div className="info-container">
                    <div className="subject-header text-4xl mb-[10px]">
                        <h2>Subject Name</h2>
                    </div>
                    <div className="subject-desc text-xl mb-[10px]">
                        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt minus quae voluptate odio laboriosam. Eveniet, nostrum. Aliquid suscipit quaerat reiciendis.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime possimus praesentium sint dolorem porro sunt odio placeat voluptates minus aut!
                        </h4>
                    </div>
                    <div className="subject-overview">
                        <div className="overview-header text-3xl mb-[10px]">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-container">

                            <ul className='overview-list'>
                                <li className='list-item'>Chapters</li>
                                <li className='list-item'>Topics</li>
                                <li className='list-item'>Notes</li>
                                <li className='list-item'>Quizes</li>
                            </ul>
                        </div>
                    </div>

                    <div className="chapters">
                        <div className="chapter-info text-3xl">
                            <h3>Chapters </h3>
                            <div className="chapter">
                                <h2>Chapter 1 [Name] </h2>
                                <div className="chapter-topics">
                                    <h3>Topic 1</h3>
                                    <h3>Topic 2</h3>
                                    <h3>Topic 3</h3>
                                    <h3>Topic 4</h3>
                                    <h3>Topic 5</h3>
                                </div>
                            </div>
                            <div className="chapter">
                                <h2>Chapter 2 [Name] </h2>
                                <div className="chapter-topics">
                                    <h3>Topic 1</h3>
                                    <h3>Topic 2</h3>
                                    <h3>Topic 3</h3>
                                    <h3>Topic 4</h3>
                                    <h3>Topic 5</h3>
                                </div>
                            </div>
                            <div className="chapter">
                                <h2>Chapter 3 [Name] </h2>
                                <div className="chapter-topics">
                                    <h3>Topic 1</h3>
                                    <h3>Topic 2</h3>
                                    <h3>Topic 3</h3>
                                    <h3>Topic 4</h3>
                                    <h3>Topic 5</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Subjectinfo;