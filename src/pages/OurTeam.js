import React from "react";
import"./OurTeam.css";

import doctor1 from '../assets/doctor2.jpg';
import doctor2 from '../assets/doctor1.jpg';
import doctor3 from '../assets/doctor3.jpg';

import { SocialIcon } from 'react-social-icons';

const OurTeam = () => {
    return ( 


<section className="section-white">
<h1>
         OurTeam
        </h1>
 <div className="container">
    <div className="row">
        <div className="col-sm-6 col-md-4">
            <div className="team-item">
                <img src={doctor1} className="team-item" alt="pic" width="250px" />
                <h3>MOHAMED EL-AMINE</h3>
                <div className="team-info">
                    <p>head of SEO</p>
                    <p>Dr. Mohamed has worked on studies examining the effects of video games on sleep and interpersonal relationships, seeking methods to help individuals manage these mental health issues</p>
                     <ul className="team-icon">
                        <li><a href="#" className="twitter">
                        <SocialIcon url="https://twitter.com" />
                         </a> </li>
                         <li><a href="#" className="facebook">
                         <SocialIcon url="https://facebook.com" />
                         </a> </li> <li><a href="#" className="instagram">
                         <SocialIcon url="https://instagram.com" />
                         </a> </li>
                     </ul>
                </div>
            </div>
        </div>




        <div className="col-sm-6 col-md-4">
            <div className="team-item">
                <img src={doctor2} className="team-item" alt="pic" width="250px" />
                <h3>SALMA MANSOURI</h3>
                <div className="team-info">
                    <p>Psychiatrist</p>
                    <p>Dr.Salma is a psychiatrist specializing in addictive behaviors and mental health disorders related to video games. She has extensive experience in treating compulsive dependencies, including excessive video game addiction.</p>
                     <ul className="team-icon">
                        <li><a href="#" className="twitter">
                        <SocialIcon url="https://twitter.com" />
                         </a> </li>
                         <li><a href="#" className="facebook">
                         <SocialIcon url="https://facebook.com" />
                         </a> </li> <li><a href="#" className="instagram">
                         <SocialIcon url="https://instagram.com" />
                         </a> </li>
                     </ul>
                </div>
            </div>
        </div>


        <div className="col-sm-6 col-md-4">
            <div className="team-item">
                <img src={doctor3} className="team-item" alt="pic" width="320px" />
                <h3>ADEM KHALED</h3>
                <div className="team-info">
                    <p>expert in psychology</p>
                    <p>Dr.Adem is an expert in clinical psychology specializing in disorders related to addiction, including video game addiction. He employs innovative therapeutic approaches to help individuals understand and overcome their excessive and compulsive dependency</p>
                     <ul className="team-icon">
                        <li><a href="#" className="twitter">
                        <SocialIcon url="https://twitter.com" />
                         </a> </li>
                         <li><a href="#" className="facebook">
                         <SocialIcon url="https://facebook.com" />
                         </a> </li> <li><a href="#" className="instagram">
                         <SocialIcon url="https://instagram.com" />
                         </a> </li>
                     </ul>
                </div>
            </div>
        </div>
    </div>
 </div>
</section>
     )
}


export default OurTeam;