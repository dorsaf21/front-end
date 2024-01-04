import React from 'react';
import headerimg from '../assets/doc1.png';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faSquare ,faVrCardboard } from '@fortawesome/free-solid-svg-icons'
  import { faGamepad , faBrain,faUserDoctor,faHouseMedicalCircleCheck} from '@fortawesome/free-solid-svg-icons'
const Home = ()=>{
    return ( 
    <header>
<div className='container'>
    <div className='row'>
        <div className='col-md-8 col-lg-8'>
       
            <h5>Game Over Addiction: A Healthier Tomorrow</h5>
            <h2>Innovative strategies for predicting and managing video game dependency</h2>
            <button><a href='#'>Read More</a></button>
            <span>+</span>
            
          
            
            </div>
        <div className='col-lg-4 col-md-4'>
        <div className='header-box'>
        <img src={headerimg}   />
        
        <FontAwesomeIcon icon={faSquare} className='A' />
        <FontAwesomeIcon icon={faSquare} className='B' />
        <FontAwesomeIcon icon={faGamepad} className='S' />
        <FontAwesomeIcon icon={faBrain} className='C'/>
        <FontAwesomeIcon icon={faUserDoctor} className='D' />
        <FontAwesomeIcon icon={faHouseMedicalCircleCheck} className='E'/>
        <FontAwesomeIcon icon={faVrCardboard}  className='F' />
       
        </div>

        </div>
    </div>
</div>


    </header>
    )
}

export default Home;