import React from 'react';
import Banner from '../components/Banner/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import { SocialIcon } from 'react-social-icons';
import Formcontact from './Formcontact' ;
import animationData from '../assets/COTAC.json';
import Lottie from 'lottie-react';

const Contact = () => {
  return (
    <>
       
        <Banner title='Contact Us' stitle='Contact Us'/>
        
        <section className='contact-us'>
          <div className='container'>
            <div className='row'>
           
              <div className='col-lg-6 col-md-6'>
                <Formcontact/>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='side'> 
                
                  <div className='overlay'>
                    
                    <h3>Contact Us For Any Informations</h3>
                    <li><FontAwesomeIcon icon={faEnvelope}/> Email</li>
                    <hr/>
                    <p>vgame_addiction@gmail.com</p>
                    <li><FontAwesomeIcon icon={faPhone}/> Phone Number</li>
                    <hr/>
                    <p>+123 456789</p>
                    <li><FontAwesomeIcon icon={faGlobe}/> Follow Us</li>
                    <hr/>
                    <ul>
                      <li className='q'><SocialIcon url="https://twitter.com" /></li>
                      <li className='q'><SocialIcon url="https://facebook.com" /></li>
                      <li className='q'><SocialIcon url="https://instagram.com" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
} 

export default Contact