import React from 'react';
import './aboutUs.css';
import Boy1 from './assets/boy1.jpg'
import Boy2 from './assets/boy2.jpg'
import Boy3 from './assets/boy3.jpg'
import Goal from './assets/goals.jpg'
import Mission from './assets/mission.jpg'
import Sheep from './assets/sheep2.jpg';
const About = () => {

  return (
    <>
      <section className="about-us-section">
        <div className="about-us-container">
          <div className="about-us-header mb-[8%]">
            <h2>Who are we 👀❔</h2>
          </div>
          <div className="about-us-upper flex justify-between mb-[8%]">
            <div className="about-us-text-left">
              <h3>Remain a step
                <i>ahead </i>
                with us.
              </h3>
              <h3>
                Be different from Others.
              </h3>
            </div>
            <div className="image">
              <img src={Sheep} alt="sheep" className='sheep-img'/>
            </div>
          </div>

          <div className="about-us-mid">
            <div className="about-us-mid-content">
              <div className="image">
                <img src={Goal} alt="goal" />
              </div>
              <div className="goal-content">
                <div className="goal-header">
                  <h3>What's our Goal⚽</h3>
                </div>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet temporibus doloribus dolore. Excepturi veritatis sint, labore magni, ratione laboriosam commodi voluptate laudantium temporibus, nemo non eum velit? Mollitia at maiores tempora voluptatem libero, a, obcaecati quidem dolorum praesentium sequi repellendus facilis harum quas ratione commodi, eaque nostrum iste voluptate?
                </h5>
              </div>
            </div>

            <div className="about-us-mid-content">

              <div className="goal-content">

                <div className="goal-header">
                  <h3>What's our Mission🎯</h3>
                </div>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet temporibus doloribus dolore. Excepturi veritatis sint, labore magni, ratione laboriosam commodi voluptate laudantium temporibus, nemo non eum velit? Mollitia at maiores tempora voluptatem libero, a, obcaecati quidem dolorum praesentium sequi repellendus facilis harum quas ratione commodi, eaque nostrum iste voluptate?
                </h5>
              </div>
              <div className="image">
              <img src={Mission} alt="mission" />
              </div>
            </div>
          </div>

          <div className="about-us-team">
            <div className="about-us-header">
              <h2>Our Team👻</h2>
            </div>
            <div className="team-info flex h-auto mb-20">
              <div className="team-images">
                <div className="team-img mb-10 bg-red-600">
                  <img src={Boy1} alt="person-1" />
                </div>
                <div className="team-img mb-10 bg-pink-500">
                <img src={Boy2} alt="person-2" />
                </div>
                <div className="team-img mb-10 bg-emerald-600">
                <img src={Boy3} alt="person-3" />
                </div>
              </div>
              <div className="team-member">
                <div className="member-info mb-10">
                  <div className="name">Amit Rawat</div>
                  <div className="about-member">
                    <div className="about-bio">This is BIO.</div >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam delectus nesciunt ipsum dolor voluptates.</p>
                  </div>
                </div>

                <div className="member-info mb-10">
                  <div className="name">Amit Rawat</div>
                  <div className="about-member">
                    <div className="about-bio">This is BIO.</div >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam delectus nesciunt ipsum dolor voluptates.</p>
                  </div>
                </div>

                <div className="member-info mb-10">
                  <div className="name">Amit Rawat</div>
                  <div className="about-member">
                    <div className="about-bio">This is BIO.</div >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam delectus nesciunt ipsum dolor voluptates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default About;
