import React from 'react'
import './contactUs.css';

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-us-header">
            <h1>Contact Our Team 🤙</h1>
          </div>
          <div className="contact-body">
            <div className="contact-persons">
              <div className="person-name">
                <h3>Amit Rawat</h3>
              </div>
              <div className="person-info">
                <div className="person-bio">
                  <h4>front-end developer of the website</h4>
                </div>
                <div className="person-phone">
                  <h4><a href="#">+918368550169</a></h4>
                </div>
                <div className="person-email">
                  <h4><a href="#">amitsr2612@gmail.com</a></h4>
                </div>
              </div>
            </div>

            <div className="contact-persons">
              <div className="person-name">
                <h3>Manish Chandra</h3>
              </div>
              <div className="person-info">
                <div className="person-bio">
                  <h4>Back-end developer of the website</h4>
                </div>
                <div className="person-phone">
                  <h4><a href="#">+918368550169</a></h4>
                </div>
                <div className="person-email">
                  <h4><a href="#">amitsr2612@gmail.com</a></h4>
                </div>
              </div>
            </div>

            <div className="contact-persons">
              <div className="person-name">
                <h3>Mj</h3>
              </div>
              <div className="person-info">
                <div className="person-bio">
                  <h4>Back-end developer of the website</h4>
                </div>
                <div className="person-phone">
                  <h4><a href="#">+918368550169</a></h4>
                </div>
                <div className="person-email">
                  <h4><a href="#">amitsr2612@gmail.com</a></h4>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-all">
            <div className="contact-form-header">
              <h3>Or fill in the contact form below and one of our lovely team will get back to you!</h3>
            </div>
          </div>
          <div className="contact-form flex flex-col">
            <input type="text" placeholder='Name' className='border-2'/>
            <input type="text" placeholder='Email' className='border-2'/>
            <input type="text" placeholder='Phone number' className='input-field border-2'/>
            <textarea name="query" className='input-field border-2' cols="50" rows="3" placeholder='What would you like to ask about'></textarea>
            <div className="submit-btn">
              <button>submit</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact;