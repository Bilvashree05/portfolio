import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Talent Scout',
    description: 'Talent Scout is an innovative platform that connects independent professionals with clients in need of specialized services. It offers freelancers the flexibility to choose projects that match their skills, interests, and career goals. By allowing talents to build strong portfolios and gain industry recognition, the platform supports continuous professional growth. For clients, Talent Scout provides access to a pool of vetted freelancers, evaluated on experience, reliability, and expertise. This ensures high-quality matches and efficient project outcomes. The platform simplifies the hiring process while empowering freelancers to thrive on their own terms.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/images/Talent.png',
    size: 'large',
    featured: true
  },
  // {
  //   id: 2,
  //   title: 'Project Two',
  //   description: 'This is another project. It is built using React and Node.js.',
  //   tags: ['React', 'Node.js'],
  //   image: '/images/project2.jpg',
  //   size: 'normal',
  //   featured: false
  // }
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card modern-project-card${project.featured ? ' featured' : ''}${project.size === 'large' ? ' large' : ''}`}
          >
            <div className="project-image-wrap">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tech-stack">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
