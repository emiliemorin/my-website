import React, { Component } from "react";
import "./Skills.css"

class Skills extends Component {
    render() {
        return (
            <div>
                <h2>Skills</h2>
                <div className="skills-container">
                    <h3>Data Aanalytics/Science </h3>
                    <div className="skills-body">
                        <li>Python (Pandas, Matplotlib, Google Maps, Scipy)</li>
                        <li>AWS Quicksight</li>
                        <li>Kibana</li>
                        <li>SQL</li>
                        <li>Matlab</li>
                        <li>Excel</li>
                    </div>
                </div>
                <div className="skills-container">
                    <h3>Front-End</h3>
                    <div className="skills-body">
                        <li>React.js</li>
                        <li>Redux</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </div>
                </div>
                <div className="skills-container">
                    <h3>Digital Strategy</h3>
                    <div className="skills-body">
                        <li>Google AdWords</li>
                        <li>Adobe Analytics</li>
                    </div>
                </div>
                <div className="skills-container ">
                    <h3>Presentation/Communication</h3>
                    <div className="skills-body">
                        <li>Microsoft Powerpoint</li>
                        <li>Microsoft Word</li>
                    </div>
                </div>
            </div>
        )
    }
}
    
export default Skills;