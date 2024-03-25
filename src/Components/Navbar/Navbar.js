import React, { useState } from 'react'
import './Navbar.css'
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Navbar({location}) {

  //------------------menu-expand---------------
  const[expand, setExpand] = useState()

  const handleClick = () =>{
    setExpand((prev) => !prev)
  }

  return (
    <div>

     <div id='navbar-contents'>
          <div id='company-logo'>eventHub</div>
          <div id='navbar-inputs'>
               <>
    <Link to='/search' style={{color:'black', fontSize:'16px', textDecoration:'none'}}>
    <div id='input-search'>
    <div className='inputs-icons'>
    <span class="material-symbols-outlined">search</span>
    <span id='nav-search-text'>Search</span>
    </div>
    </div>
    </Link>
    
    <Link to='/search' style={{color:'black', fontSize:'16px', textDecoration:'none'}}>
    <div id='input-location'>
    <div className='inputs-icons'>
      <span class="material-symbols-outlined" id='nav-location-icon'>location_on</span>
      <span id='nav-location-text'>Location</span>
    </div>
    </div>
    </Link>
               </>
               <hr id='vertical-line' />
          </div>
          <div id='nav-content-link'>
                 <div className='navbar-links' id='nav-link-hide-1'>Find Events</div>
                 <div className='navbar-links' id='nav-link-hide-2'>Create Events</div>
                   <div className='navbar-links' id='nav-link-hide-3'>Help Center</div>
                <Link to='/login' style={{color:'black', textDecoration:'none'}}><div className='navbar-links'>Log in</div></Link>
                <Link to='/signup' style={{color:'black', textDecoration:'none'}}><div className='navbar-links'>Sign up</div></Link>
                <span class="material-symbols-outlined menu-icon" id='menu-bar-icon' onClick={handleClick}>menu</span>
                { expand && (
                    <div className='menu-bar'> 
                    <div>Find Events</div>
                    <div>Create Events</div>
                   <div>Help Center</div>
                   <div>Contact</div>
                </div>
                ) }
          </div>
     </div>

     <div id='navbar-contents-690'>
      <div id='navbar-690-content'>
      <div id='company-logo-690'>e</div>

       <div id='nav-content-link-690'>
       <Link to='/login' style={{color:'black', textDecoration:'none'}}><div className='navbar-links'>Log in</div></Link>
       <Link to='/signup' style={{color:'black', textDecoration:'none'}}><div className='navbar-links'>Sign up</div></Link>
       <span class="material-symbols-outlined menu-icon" id='menu-bar-icon' onClick={handleClick}>menu</span>
                { expand && (
                    <div className='menu-bar'> 
                    <div>Find Events</div>
                    <div>Create Events</div>
                   <div>Help Center</div>
                   <div>Contact</div>
                </div>
                ) }
       </div>
      </div>
      <div id='navbar-inputs'>
    <>
    <Link to='/search' style={{color:'black', fontSize:'16px', textDecoration:'none'}}>
    <div id='input-search'>
    <div className='inputs-icons'>
    <span class="material-symbols-outlined">search</span>
    <span>Search</span>
    </div>
    </div>
    </Link>
    </>
      </div>

     </div>
    </div>
     
  )
}

export default Navbar