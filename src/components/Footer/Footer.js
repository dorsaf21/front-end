import React from "react";
import '../../index.css'
import footerlogo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faPhone } from '@fortawesome/free-solid-svg-icons' ;
  import { SocialIcon } from 'react-social-icons';
  
const Footer =()=>{
    return(
        <footer>
            <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                  <img src={footerlogo} className="footerlogo" width="150px" title="logo"/>
                  <p>Your health, our priority – offering premier 
                    solutions for video game addiction</p>
                    <div className="footer-contact">
                    <div className="footer-icon">
                    <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="footer-text"> 
                    <h6>Contact Us</h6>  
                        <h4>(+213) 777 999 111</h4>

                    </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Quik Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Faqs</a></li>
                        <li><a href="#">Our team</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <h2>Our Services</h2>
                    <ul>
                        <li><a href="#">Predictive Assessments</a></li>
                        <li><a href="#">Psychiatrist Collaboration</a></li>
                        <li><a href="#">Addiction Management</a></li>
                        
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">

                        <h2>Subcribe</h2>
                        <form1>
                            <input type="email" placeholder="Enter Email" />
                            <button className="X" type="submit" >subcribe now</button>
                        </form1>
                        <ul className="social" >
                           <SocialIcon url="https://twitter.com" />
                          < SocialIcon url="https://facebook.com" />
                          <SocialIcon url="https://instagram.com" />
                          
                        </ul>
                    
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12" >
                            <span className="W"> PlayCare ©  All rights reserved. </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer;