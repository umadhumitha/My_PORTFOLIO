import React, { Component } from "react";
import Typical from "react-typical";
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-parent">

          <div className="profile-details">
            <div className="profile-details-name">
              <span className="primary-text">
                <h2>Hello, I'm </h2>
                <span className="highlighted-text">
                  <h2>Madhumitha U</h2>
                </span>
              </span>
            </div>

            <div className="profile-details-role">
              <span className="primary-text">
                <h3>
                  <Typical
                    loop={Infinity}
                    steps={[
                      " Enthusiastic Student", 1000,  "B.E CSE", 1000, 
                    ]}
                  />
                </h3>
              </span>
              <span className="profile-role-tagline">
                Interested in Mern Stack Development
              </span>
            </div>

            <div className="profile-options">
            <a href="./assets/madhu_resume.pdf" download>
                <button className="btn primary-btn">Hire Me</button>
              </a>
            </div>
          </div>

          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
