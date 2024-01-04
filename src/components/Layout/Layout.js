import React, { Fragment } from "react";
import { Outlet} from "react-router-dom";
import Navbars from "../Nav/Navbar";
import Footer from "../Footer/Footer";



const Layout = ()=>{
  return(
    <Fragment>
       <Navbars/>
      <main>
        <Outlet/>
      </main>
      <Footer />
    </Fragment>
      
  )
}

export default Layout;
