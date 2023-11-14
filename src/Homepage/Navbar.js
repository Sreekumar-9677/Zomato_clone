import React from 'react'
import {Link } from "react-router-dom";



function Navbar() {
  return (
    <div className='nav1'>
  <nav className="navbar navbar-expand-lg navbar-light ">
  <Link to= "Addrestaurant"  className="navbar-brand text-light">Add restaurant</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link text-light" >Log in <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light">Sign up</a>
      </li>
      
      </ul>
      </div></nav>
    
  
</div>
 
 )
}

export default Navbar;
