import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1><span className="h1-text">Bilvashree H S</span></h1>
            <p className="intro">
            With a deep enthusiasm for technology and a solid background in web development, I focus on crafting efficient and user-centric applications. I am driven by a curiosity to explore new tools and frameworks, constantly evolving my skill set to deliver modern and impactful software solutions.
            </p>
          </div>
          <div className="hero-image">
            <img src="/images/971.jpg" alt="Icon 1" className="hero-icon hero-icon-1" />
            <img src="/images/AI.jpg" alt="Icon 2" className="hero-icon hero-icon-2" />
          </div>
        </div>
      </div>

      <div className="education-section">
        <h2>Education</h2>
        <div className="education-main-content">
          <div className="education-timeline">
            <div className="education-item">
              <h3>Vijaya High School, Hassan</h3>
              {/* <p>Batch- 2020</p> */}
              <p>Percentage-93%</p>
            </div>

            <div className="education-item">
              <h3>Masters PU Collage, Hassan</h3>
              <p>PCMB</p>
              <p>Percentage-84%</p>
            </div>

            <div className="education-item">
              <h3>Malnad College of Engineering, Hassan</h3>
              {/* <p>Batch 2022 - 2026</p> */}
              <p>Degree-B.E Computer Science</p>
              <p>CGPA-8.5</p>
            </div>
          </div>
          <div className="education-right-image">
            <img src="/images/Education.jpg" alt="Education Illustration" className="education-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
