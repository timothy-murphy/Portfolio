
import './App.css';
import image from './headshot.jpeg';
import linkedinimage from './linkedin.png'
import githubimage from './github-logo.png'

import signature from './TM..svg'

import React, { useState } from 'react';
import Popup from './Popup';



function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    
    <html>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header>
      <div className = "signature"><img src ={signature} alt="My Happy SVG"/></div>
        <div className  ="Image">
          <img class="image head" src ={image} alt = "House Image"/>
        </div>
        <div>
          <h1 className = "name"><b>Timothy Murphy</b></h1>

          
        </div>
      </header>
    <div>
      <h2 className = "description"><br/> Data Scientist at Oracle </h2>
    </div>
    <a href = "https://www.linkedin.com/in/timothy-murphy-74b642160"><img class="image linkedin" src ={linkedinimage} alt = "Linkedin"/></a>      
    <a href = "https://github.com/timothy-murphy"><img class="image github" src ={githubimage} alt = "Github"/></a>  
    <div className = "aboutContact">
      <button className = "buttonNames" onClick={togglePopup}>About Me</button>     <a href = "mailto: timothye.murphy97@gmail.com"> <button className = "buttonNames">Contact</button></a>
    </div>
    {isOpen && <Popup
      
      handleClose={togglePopup}
    />}
    </html>
  );
}

export default App;
