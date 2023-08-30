import React from 'react'
import './newsletter.css'

const Newletter = () => {
    return (
        <>
            <div className="news-letter">
                    <div className="letter-head">
                        <h2>Join our Guided Tour</h2>
                    </div>
                <div className="letter-container">
                    <div className="letter-lower-section">
                        <div className="text-box">
                            <input type="text" className='fname' name='fname' placeholder='first name'/>
                            <input type="text" className='lname' name='lname' placeholder='last name'/>
                        </div>
                    </div>
                            <input type="text" className='email' name='email' placeholder='email'/>
                        <button className='sub-btn'>submit</button>
                </div>
            </div>
        </>
    )
}

export default Newletter