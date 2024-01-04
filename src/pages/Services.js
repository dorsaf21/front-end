import React from 'react'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd, faEye, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

const Services = () => { 
  return (
    <div className="service component__space" id="Services">
      <div className="heading">
        <h1 className='oo'>Our Services</h1>
        <p className="heading p__color">
          Unlock a world of tailored services to enhance your well-being and gaming.


        </p>
        <p className="heading p__color">
          From personalized predictive assessments to connect with expert psychiatrists and holistic addiction management solutions,
        </p>
        <p className="heading p__color">
          our offerings are designed for a healthier, more enjoyable gaming experience.
        </p>
      </div>

      <div className="containere">
        <div className="row1">


          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <FontAwesomeIcon icon={faEye} />
              </div>
              <div className="service__meta">
                <h3 className="o">Predictive Assessments</h3>
                <p className="p service__text p__color">
                Gain valuable insights into your gaming habits through personalized assessments.
                 Our advanced technology analyzes your patterns, preferences, and behaviors, providing tailored recommendations to enhance your gaming experience.
                  Whether optimizing strategy or suggesting relevant content, our assessments make your gaming more enjoyable and personalized.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <FontAwesomeIcon icon={faUserMd} />
              </div>
              <div className="service__meta">
                <h4 className="ooo">Psychiatrist Collaborations</h4>
                <p className="p service__text p__color">
                Connect seamlessly with experienced psychiatrists for personalized mental health support.
                 Our platform enables direct collaboration with certified psychiatrists, ensuring tailored care.
                  Through secure virtual sessions, discuss concerns, receive expert advice, and create a personalized treatment plan.
                   We aim to provide accessible and effective mental health support, empowering you on your journey to well-being.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <FontAwesomeIcon icon={faHeartbeat} />
              </div>
              <div className="service__meta">
                <h4 className="oooo">Addiction Management</h4>
                <p className="p service__text p__color">
                Experience holistic solutions, blending questionnaires, gaming data, and mental health scores for overall well-being.
                 Our approach creates a personalized addiction management plan by understanding the interplay between gaming habits and mental health.
                  We strive to provide effective strategies, fostering a healthier relationship with gaming and promoting mental well-being.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Services
