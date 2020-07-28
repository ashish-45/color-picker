import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = ()=> {
    return (
        <nav className = "navbar navbar-inverse navbar-fixed-top navbar-custom " role = "navigation">
   
        <div className = "navbar-header">
                <button type = "button" className = "navbar-toggle" data-toggle = "collapse" data-target = "#example-navbar-collapse">
                    <span className = "sr-only">Toggle navigation</span>
                    <span className = "icon-bar"></span>
                    <span className = "icon-bar"></span>
                    <span className = "icon-bar"></span>
                </button>     
                <a className = "navbar-brand nav-header" href = "#">Color Picker</a>
        </div>
        
        <div className = "collapse navbar-collapse" id = "example-navbar-collapse">
           <ul className = "nav navbar-nav ">  
              <li className = "active"><a href = "index.html">HOME</a></li>
              <li className = "active">
                 <NavLink  data-target="#myModal" data-toggle="modal" exact to='/about' >ABOUT</NavLink>
               </li>
           </ul>
        </div>
     </nav>

    )
}

export default Navbar;
