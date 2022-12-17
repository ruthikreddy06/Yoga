import React from 'react'
import {
    Link
   } from "react-router-dom";
function Navbar() {
  return (
    <div>
        <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">yogaclasses</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="nav-link headingnames1" to="/"><span className='coloring'>Home</span><span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link headingnames1" to="/Getdetails"><span className='coloringbusiness'>getdetails</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link headingnames1" to="/payment"><span className='coloringentertainment'>payment</span></Link>
          </li>
          
   
          

        </ul>
      </div>
    </nav>
    </div>
    </div>
  )
}

export default Navbar