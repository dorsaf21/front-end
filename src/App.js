import React, { Fragment } from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import LoginRegister from './pages/LoginRegister';
import AboutUs from'./pages/AboutUs';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';
import Services from './pages/Services';


function App() {
  return (
   
   <>
    
    <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index path="/home" element={<Home />} />
          <Route path="/LoginRegister" element={<LoginRegister />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/OurTeam" element={<OurTeam/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Services" element={<Services/>} />
          

          </Route>
          
        </Routes>

     
     </>
     );
}

export default App;

