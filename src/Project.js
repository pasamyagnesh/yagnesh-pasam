// Project.js
import React from 'react';

const projects = [
  {
    title: "Dork Application",
    description: "A web application enhancing DSA problem-solving skills",
    techStack: ["JavaScript", "Node.js", "Express.js", "PostgreSQL", "Vercel","Supabase","Google Analytics","EJS","API"],
    demoLink: "https://dork-application.vercel.app/",
    codeLink: "https://github.com/yourusername/dork-application",
    date: "March 2024",
    image: "images/Dork.png"
  },
  {
    title: "URL Shortener App (Open Source Developer)",
    description: "A URL shortener app for easy link management.",
    techStack: ["Html","CSS","Flask", "Python", "MongoDB", "Vercel", "Bootstrap","Postman"],
    demoLink: "https://project-osus.vercel.app/",
    codeLink: "https://github.com/pasamyagnesh/project-osus",
    pullRequestsLink: "https://github.com/harshithtunuguntla/project-osus/pulls?q=is%3Apr+is%3Aclosed+author%3Apasamyagnesh",
    date: "October 2024",
    image: "images/URL.png"
  },
  {
    title: "Calendarium.io",
    description: "A Fullstack Calendar Application.",
    techStack: ["Next.js", "CSS", "Javascript","Html"],
    demoLink: "https://github.com/pasamyagnesh/zenstreet.ai-assignment.git",
    codeLink: "https://github.com/pasamyagnesh/zenstreet.ai-assignment.git",
    date: "November 2024",
    image: "images/Homepagee.png"
  },
  {
    title: "Event Management Website",
    description: "A web app for EPISTEMICON 2024, providing event schedules and updates to 560+ users.",
    techStack: ["React.js", "Tailwind CSS", "Google Analytics", "Vercel"],
    demoLink: "https://epistemicon-aliet.vercel.app/",
    codeLink: "https://github.com/yourusername/event-management",
    date: "September 2024",
    image: "images/Event.png"
  },
 
  {
    title: "Flames - Relationship checker game",
    description: "This online flames calculator is used to finds the compatibility between you and your partner.",
    techStack: ["EJS","CSS","Javascript", "Express.js", "ngrok","Postman"],
    demoLink: "https://github.com/pasamyagnesh/game.git",
    codeLink: "https://github.com/pasamyagnesh/game.git",
    date: "July 2024",
    image: "images/Flames.png"
  },
  // Add other projects in similar format
];

const Project = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
      {projects.map((project, index) => (
        <div 
          key={index} 
          style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            padding: '20px', 
            width: '400px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center' 
          }}
        >
          <img 
            src={require(`./${project.image}`)} 
            alt={project.title} 
            style={{ width: '400px', height: '250px', borderRadius: '4px', marginBottom: '15px' }}
          />
          <h3 style={{ fontSize: '24px', fontWeight: '400', fontStyle: 'italic' }}>
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', color: '#0070f3' }}
            >
              {project.title}
            </a>
          </h3>
          <p style={{ fontSize: '16px', color: '#666' }}>{project.date}</p>
          <p style={{ marginTop: '10px', fontSize: '18px' }}>{project.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px', justifyContent: 'center' }}>
            {project.techStack.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                style={{ 
                  backgroundColor: '#f1f3f5', 
                  color: '#333', 
                  padding: '5px 10px', 
                  borderRadius: '12px', 
                  fontSize: '14px', 
                  fontWeight: '500' 
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div style={{ marginTop: '10px' }}>
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', color: '#0070f3', marginRight: '15px' }}
            >
              Demo
            </a>
            <a 
              href={project.codeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', color: '#0070f3', marginRight: '15px' }}
            >
              Code
            </a>
            {project.pullRequestsLink && (
              <a 
                href={project.pullRequestsLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: 'none', color: '#0070f3' }}
              >
                Pull Requests
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
