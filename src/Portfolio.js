import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import './style.css';
import Project from './Project';  // Adjust the path if Project.js is in a different folder

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
      { rotation: 360, duration: 1 } // Set transition time to 1 second
    );
  }, [darkMode]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`Container ${darkMode ? 'dark' : 'light'}`} style={{ padding: '30px 22px' }}>
      {/* Flex container for title, navigation, and icon */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 className="title" style={{ fontSize: '48px', fontWeight: '400', margin: '0' }}>
          Pasam Yagnesh
        </h4>

        {/* Navigation and theme icon container */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('experience');
            }}
            style={{ textDecoration: 'none', color: darkMode ? 'lightgreen' : '#bc7a00', fontSize: '25px', fontStyle: 'normal' }}
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            style={{ textDecoration: 'none', color: darkMode ? 'lightgreen' : '#bc7a00', fontSize: '25px', fontStyle: 'normal' }}
          >
            Projects
          </a>
          <a
            href="#techstack"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('techstack');
            }}
            style={{ textDecoration: 'none', color: darkMode ? 'lightgreen' : '#bc7a00', fontSize: '25px', fontStyle: 'normal' }}
          >
            Tech Stack
          </a>

          {/* Theme icon */}
          <div
            style={{
              cursor: 'pointer',
            }}
            onClick={toggleDarkMode}
          >
            <FontAwesomeIcon
              icon={darkMode ? faSun : faMoon}
              className="theme-icon"
              style={{ fontSize: '24px' }}
            />
          </div>
        </div>
      </div>

      <h5 className="subtitle" style={{ fontSize: '28px', fontStyle: 'italic', fontWeight: '300' }}>
        Backend Developer / Design
      </h5>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img
            src={require('./yagnesh.jpeg')}
            alt="Pasam Yagnesh"
            style={{
              width: '300px',
              height: '300px',
              margin: '0px 0px',
              borderRadius: '50%',
            }}
          />

          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a 
              href="https://drive.google.com/file/d/1Xh0zDQ6kz0_70l_0DxhG3AHUivq06R2W/view?usp=drive_link" 
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-regular fa-file" /> Resume
            </a>
            
            <a 
              href="https://x.com/yagneshpasam?lang=en" 
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" /> Twitter
            </a>
            
            <a 
              href="https://github.com/pasamyagnesh" 
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" /> GitHub
            </a>
            
            <a 
              href="https://www.stopstalk.com/user/profile/yagnesh2004" 
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Stopstack
            </a>
            
            <a 
              href="https://www.linkedin.com/in/yagneshpasam/" 
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <h4 className="title about" style={{ fontSize: '40px', fontWeight: '400' }}>About me</h4>
      <p className="titlee" style={{ fontSize: '25px' }}>
        Namaste!!
      </p>
      <p className="titlee" style={{ fontSize: '25px' }}>
        My name is <i>Pasam Yagnesh</i>, and I am studying Computer Science. I have a passion for developing useful products and exploring open-source technologies. Previously, I worked on client-server architecture using JavaScript.
        <br/>
        <br />
        Currently, I am learning about how systems work at scale. My interests include math, coding, photography, design, cinema, cryptography, and badminton.
      </p>

      <div id="experience" style={{ marginTop: '10px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '400' }}>Experience</h2>

        <div style={{ marginTop: '0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h3 style={{ fontSize: '25px', fontWeight: '400', flex: 1 }}>Hacktoberfest<span style={{ fontStyle: 'italic',fontSize:'23px' }}> | Open Source Contributor</span></h3>
  <p style={{ fontStyle: 'italic', fontSize: '18px' }}>October 2024 - Present</p>
</div>

        <ul className="experience-list">
          <li className="experience-item">- Working on Flask and MongoDB Atlas technologies for an open-source URL shortener application.</li>
          <li className="experience-item">- Developed a comprehensive /analytics endpoint where users can track their shortened URLs (Clicks etc).</li>
          <li className="experience-item">- Responsibilities: Resolving existing issues, creating pull requests, enhancing features, and working with tools like Git and GitHub for version control.</li>
        </ul>

        <div style={{ marginTop: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '25px', fontWeight: '400', flex: 1 }}>Indian Servers <span style={{ fontStyle: 'italic',fontSize:'23px' }}>| Machine Learning Trainee</span></h3>
          <p style={{ fontStyle: 'italic', fontSize: '18px' }}>May 2023 - July 2023</p>
        </div>
        <ul className="experience-list">
          <li className="experience-item">- Explored advanced Natural Language Processing (NLP) techniques and gained insights into how Large Language Models (LLMs), including GPT2 and Llama 2, function.</li>
          <li className="experience-item">- Acquired hands-on experience with Hugging Face and its open-source models, applying them to real-world problems and improving model performance.</li>
        </ul>
      </div>


      <h4 id="projects" className="title about" style={{ fontSize: '40px', fontWeight: '400' }}>
  Projects
</h4>
<Project />




<h4 id="techstack" className="title about" style={{ fontSize: '40px', fontWeight: '400', marginBottom: '20px' }}>
  Tech Stack
</h4>

<ul style={{ fontSize: '23px', paddingLeft: '20px', listStyleType: 'none' }}>
  <li style={{ marginBottom: '10px' }}>
    <strong>Languages:</strong>
    <span style={{ marginLeft: '10px' }}>Python, C++, Java</span>
  </li>
  <li style={{ marginBottom: '10px' }}>
    <strong>Frontend:</strong>
    <span style={{ marginLeft: '10px' }}>HTML, EJS, CSS, JavaScript, React.js</span>
  </li>
  <li style={{ marginBottom: '10px' }}>
    <strong>Backend:</strong>
    <span style={{ marginLeft: '10px' }}>Node.js, Express.js, Flask</span>
  </li>
  <li style={{ marginBottom: '10px' }}>
    <strong>Database:</strong>
    <span style={{ marginLeft: '10px' }}>PostgreSQL, MongoDB, Supabase</span>
  </li>
  <li style={{ marginBottom: '10px' }}>
    <strong>Tools:</strong>
    <span style={{ marginLeft: '10px' }}>VSCode, Vercel, Ngrok, Postman, Google Analytics</span>
  </li>
  <li style={{ marginBottom: '10px' }}>
    <strong>Version Control System:</strong>
    <span style={{ marginLeft: '10px' }}>Git & GitHub</span>
  </li>
  <li style={{ marginBottom: '10px' }}>
    <strong>Cloud Services:</strong>
    <span style={{ marginLeft: '10px' }}>Google Cloud</span>
  </li>
</ul>


      <footer style={{ marginTop: '40px', textAlign: 'center' }}>
        <p>© 2024 Pasam Yagnesh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
