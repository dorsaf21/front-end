import Lottie from 'lottie-react';
import animationData from '../assets/Animation.json';

import line from '../assets/line.json';
import React from 'react';
import './AboutUs.css';
import { useRef } from 'react';

const AboutUs = () => {
  return (
    <header>
      
    <div class="contai">
      
       <h1 className='aa'>
         About Us.
        </h1>
        <h3 className='ab'>Our Commitment to Addressing Video Game Addiction</h3>
       <p className='first-paragraph'>
      Welcome to our platform dedicated to the prediction and management of 
      <br/>video game addiction.We are committed to providing innovative tools 
      <br/>to help individuals understand and manage their gaming behavior
      </p>
    </div>
      
      <div
        style={{
          width: '450px',  // Adjust the width as needed
          height: '500px', // Adjust the height as needed
          margin: '0 auto', // Center the container horizontally
          position: 'relative', // Enable positioning for the Lottie animation
          top: '-190px', // Adjust the top position as needed
          right: '400px', // Adjust the left position as needed
        }}
      >
        <Lottie animationData={animationData} style={{ width: '100%', height: '100%' }} />
      </div>


      <div class="row">
      <div className="col-sm-6 col-md-4">
            <div className="item">
                <h2 style={{color:'rgb(242, 108, 229)'}}>10</h2>
                <div className="info">
                    <p style={{color:'rgb(242, 108, 229)',fontSize:'35px'}}>Years with you</p>
                    <p>Dedicated to helping individuals quit gaming and overcome addiction</p>
                </div>
            </div>
        </div>
        
        <div className="col-sm-6 col-md-4">
            <div className="item">
            <h2 style={{color:'rgb(242, 108, 229)'}}>15</h2>
                <div className="info">
                    <p style={{color:'rgb(242, 108, 229)',fontSize:'40px'}}>Doctors</p>
                    <p>Expert doctors address video game addiction with innovative approaches.</p>
                </div>
            </div>
        </div>

        <div className="col-sm-6 col-md-4">
            <div className="item">
            <h2 style={{color:'rgb(242, 108, 229)'}}>+200</h2>
                <div className="info">
                    <p  style={{color:'rgb(242, 108, 229)',fontSize:'35px'}}>Satisfied Client</p>
                    <p>Satisfied clients highlight effectiveness and commitment in managing video game addiction</p>
                </div>
            </div>
        </div>
        </div>

      

      

      
    </header>
  );
};


export default AboutUs;
