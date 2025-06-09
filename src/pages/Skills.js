import React from 'react';
import './Skills.css';

const icons = {
  'React.js': (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><g><ellipse stroke="#61DAFB" strokeWidth="2" cx="16" cy="16" rx="14" ry="6"/><ellipse stroke="#61DAFB" strokeWidth="2" cx="16" cy="16" rx="6" ry="14" transform="rotate(60 16 16)"/><ellipse stroke="#61DAFB" strokeWidth="2" cx="16" cy="16" rx="6" ry="14" transform="rotate(120 16 16)"/><circle fill="#61DAFB" cx="16" cy="16" r="2.5"/></g></svg>
  ),
  'Node.js': (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 2l13.856 8v12L16 30 2.144 22V10z" stroke="#8CC84B" strokeWidth="2" fill="#8CC84B" fillOpacity="0.1"/><path d="M16 23v-6.5" stroke="#8CC84B" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="13" r="2" fill="#8CC84B"/></svg>
  ),
  'MongoDB': (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 4c2 6 6 10 6 16 0 4-2 6-6 8-4-2-6-4-6-8 0-6 4-10 6-16z" fill="#47A248"/><path d="M16 28V4" stroke="#47A248" strokeWidth="2"/></svg>
  ),
  'JavaScript': (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><text x="7" y="22" fontSize="14" fontWeight="bold" fill="#222">JS</text></svg>
  ),
  'HTML/CSS': (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" rx="6" fill="#E44D26"/><rect x="6" y="6" width="20" height="20" rx="4" fill="#1572B6"/><text x="8" y="22" fontSize="10" fontWeight="bold" fill="#fff">HTML</text><text x="8" y="28" fontSize="10" fontWeight="bold" fill="#fff">CSS</text></svg>
  ),
  'Git': (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F05133"/><circle cx="16" cy="16" r="6" fill="#fff"/><circle cx="16" cy="16" r="3" fill="#F05133"/></svg>
  ),
};

const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const skills = shuffleArray([
  {
    name: 'React.js',
    level: 'Advanced',
    description: 'Building modern, responsive web applications with React and its ecosystem',
    percent: 60,
  },
  {
    name: 'Node.js',
    level: 'Advanced',
    description: 'Developing scalable backend services and RESTful APIs',
    percent: 60,
  },
  {
    name: 'MongoDB',
    level: 'Advanced',
    description: 'Designing and implementing efficient database solutions',
    percent: 60,
  },
  {
    name: 'JavaScript',
    level: 'Expert',
    description: 'Mastering modern JavaScript features and best practices',
    percent: 80,
  },
  {
    name: 'HTML/CSS',
    level: 'Expert',
    description: 'Creating beautiful and responsive user interfaces',
    percent: 90,
  },
  {
    name: 'Git',
    level: 'Advanced',
    description: 'Version control and collaborative development',
    percent: 75,
  },
]);

const Skills = () => {
  return (
    <div className="skills-page">
      <h2>My Skills</h2>
      <div className="skills-grid cards-layout">
        {skills.map((skill, idx) => (
          <div className="skill-card new-skill-card" key={idx}>
            <div className="skill-header">
              <span className="skill-icon">{icons[skill.name]}</span>
              <span className="skill-label">{skill.name}</span>
            </div>
            <p className="skill-description">{skill.description}</p>
            <div className="progress-bar-container">
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
              <span className="progress-percent">{skill.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
