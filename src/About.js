import React, { Component } from 'react';
import Image8 from './assets/pointing.jpg';
import './About.css';

export class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="profile-section">
          <div className="profile-image">
            <img src={Image8} alt="pointing" />
          </div>
          <div className="profile-content">
            <p><strong>
            Work hard, be kind, and amazing things will happen !!!!
            </strong>
            </p>
          </div>
        </div>

        <div className="info-section">
          <div className="info-card">
            <h3>Educational Qualifications</h3>
            <div className="timeline">
              <div className="timeline-item">
                <h5>2020-2024</h5>
                <p>M.Kumarasamy College Of Engineering</p>
                <p>B.E Computer Science and Engineering</p>
                <p>Score: 8.893</p>
              </div>
              <div className="timeline-item">
                <h5>2019-2020</h5>
                <p>Sri Lathangi Vidhya Mandir Matric Higher Secondary School</p>
                <p>Score: 84.6%</p>
              </div>
              <div className="timeline-item">
                <h5>2017-2018</h5>
                <p>Seventh-day Adventist Higher Secondary School</p>
                <p>Score: 87.4%</p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="skills-section">
        <div className="skills-card">
          <h2 className="section-title">Cocurricular Activities</h2>
          <ul className="activity-list">
            <li className="activity-item">Finalist in "Engineering Equity Hackathon"</li>
            
            <li className="activity-item">Completed Web Development Internship</li>

            {/* <a href="/virtusa">My Experience</a> */}
            {/* Add more activities */}
          </ul>
        </div>
      </div>
      
      <div className="roles-section">
        <div className="roles-card">
          <h2 className="section-title">Roles</h2>
          <ul className="role-list">
            <li className="role-item">Prime member of Student Campus Ambassador Program (Intel)</li>
            <li className="role-item">Speaker at "AI EXPLORA" Workshop
            </li>
            {/* <a href="/intelclub">More About my Role</a> */}
            {/* Add more roles */}
          </ul>
        </div>
      </div>

        <div className="achievements-section">
          <div className="achievements-card">
            <h4>Achievements</h4>
            <div className="trophy-icon">
              <span>🏆</span>
            </div>
            <ul>
              <li>
                 Elite-Silver in Nptel Course <strong>“Programming in Java” with Top 5% </strong>(January – April 2023) Grade: 83%
              </li>
              <li>
                Won 3rd place in <strong>Zonal Level Badminton Match</strong> held at SSM College of Engineering and Technology, Dindigul, 2022
              </li>
              <li>
           Elite-Silver in Nptel Course <strong>“Introduction to C Programming” </strong>(February - April 2022) Grade: 86%
              </li>
              <li>
                Won 3rd place in <strong>March past </strong>during 75th Independence day Celebration, 2022, held at M.Kumarasamy College Of Engineering, Karur
              </li>
            </ul>
          </div>
        </div>

        <footer>
          <span>
            Created By <a href="https://www.linkedin.com/in/madhumitha-u-42a816202">Madhumitha U</a>
          </span>
        </footer>
      </div>
    );
  }
}

export default About;
