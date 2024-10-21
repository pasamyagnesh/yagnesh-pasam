import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import './style.css';
function Portfolio() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Toggle the body class based on the darkMode state
    document.body.className = darkMode ? 'dark' : 'light';
    





    
    // GSAP rotation animation
    gsap.fromTo(
      '.theme-icon', 
      { rotation: 0 }, 
      { rotation: 360, duration: 0.8}
    );
  }, [darkMode]);

  return (
    <div className={`Container ${darkMode ? 'dark' : 'light'}`} style={{ padding: '30px 22px' }}>
      <div style={{ position: 'relative' }}>
        <h4 className="title" style={{ fontSize: '48px', fontWeight: '400' }}>
          Pasam Yagnesh
        </h4>
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={toggleDarkMode}
        >
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}  // Toggle between sun and moon icon based on darkMode state
            className="theme-icon" // Add a class to target the icon for animation
            style={{ fontSize: '24px' }}  // Adjust icon size here
          />
        </div>
      </div>

      <h5 className="subtitle" style={{ fontSize: '28px', fontStyle: 'italic', fontWeight: '300' }}>
        Backend developer / Design
      </h5>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
  <img 
    src={require('./yagnesh.jpeg')} 
    alt="Nature" 
    style={{ 
      width: '300px', 
      height: '300px', 
      margin: '0px 0px', 
      borderRadius: '15%', // This gives the image rounded corners
    }} 
  />

<div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <a 
    href="https://drive.google.com/file/d/1Xh0zDQ6kz0_70l_0DxhG3AHUivq06R2W/view?usp=drive_link" 
    style={{ textDecoration: 'none', color: 'lightgreen' }}
  >
    Resume
  </a>
  <a 
    href="https://x.com/yagneshpasam?lang=en" 
    style={{ textDecoration: 'none', color: 'lightgreen' }}
  >
    Twitter
  </a>
  <a 
    href="https://github.com/pasamyagnesh" 
    style={{ textDecoration: 'none', color: 'lightgreen' }}
  >
    Github
  </a>
  <a 
    href="https://www.stopstalk.com/user/profile/yagnesh2004" 
    style={{ textDecoration: 'none', color: 'lightgreen' }}
  >
    Stopstack
  </a>
  <a 
    href="https://www.linkedin.com/in/yagneshpasam/" 
    style={{ textDecoration: 'none', color: 'lightgreen' }}
  >
    LinkedIn
  </a>
</div>

</div>
</div>


      <h4 className="title about" style={{ fontSize: '40px', fontWeight: '400' }}>About me</h4>
      <p className="titlee" style={{ fontSize: '25px' }}>
        Namaste !!
      </p>
      <p className="titlee" style={{ fontSize: '25px' }}>
          My name is <i>Pasam Yagnesh</i>, and I am studying Computer Science. I have a passion for developing useful products and exploring open-source technologies. Previously, I worked on client-server architecture using JavaScript.<br/><br/> I developed the <a  style={{ color: 'lightgreen', textDecoration: 'none' }}
 href="https://dork-application.vercel.app/" >Dork application.</a>
          It is a problem-solving platform designed for individuals who want to enhance their algorithmic problem-solving skills in over 30 topics, including Bit Manipulation, Graphs, Dynamic Programming, and Greedy algorithms.
          <br />
          <br />
          Currently, I am learning about how systems work at scale. My interests include math, coding, photography, design, cinema, cryptography, and badminton.
      </p>

      <h4 className="title" style={{ fontSize: '40px', fontWeight: '400' }}>Technology Suite</h4>
      <ul style={{ fontSize: '23px', paddingLeft: '20px' }}>
        <li>Languages: <span style={{ marginLeft: '10px' }}>Python, C++, Java</span></li>
        <li>Frontend: <span style={{ marginLeft: '10px' }}>HTML, EJS, CSS, Javascript</span></li>
        <li>Backend: <span style={{ marginLeft: '10px' }}>Node.js, Express.js, Flask</span></li>
        <li>Database: <span style={{ marginLeft: '10px' }}>PostgreSQL, Supabase, MongoDB</span></li>
        <li>Tools: <span style={{ marginLeft: '10px' }}>VSCode, Vercel, Ngrok, Postman</span></li>
        <li>Version Control System: <span style={{ marginLeft: '10px' }}>Git & GitHub</span></li>
      </ul>

  
    </div>
  );
}

export default Portfolio;
