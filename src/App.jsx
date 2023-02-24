import React from 'react'
import './app.css'
import { useState } from 'react';

const App = () => {
    const [isToggle, setIsToggle] = useState(false);
  return (
    <div className='app__navbar'>
          <div className="app__navbar-logo">
              <span>Kamran</span>
          </div>
          <ul className='app__navbar-links'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Award</a></li>
              <li><a href="#">Contact</a></li>

          </ul>
          <div className="app__navbar-login">
              <a href="#">Register / login</a>
              <div></div>
              <a href="#">Book</a>
          </div>
          <div className="app_navbar_menu">
              <i className="fa-solid fa-bars icons"    onClick={()=>setIsToggle(true)}></i>
              {
                  isToggle && (
                      <div className='app_navbar-container'>
                      <i className="fa-solid fa-xmark icons close_icons" onClick={() => setIsToggle(false)}></i>
                    <ul className='app__navbar-container-links'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Award</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
              </div>
                  )
             }
          </div>
    </div>
  )
}

export default App
