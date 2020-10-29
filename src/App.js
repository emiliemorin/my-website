import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./home/Home";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Education from "./education/Education";
import Recommendations from "./recommendations/Recommendations";
import Hobbies from "./hobbies/Hobbies";
import Skills from "./skills/Skills";
import linkedinlogo from '../src/assets/linkedin-logo.png';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    {/* <h1>Emilie Morin</h1> */}
                    <ul className='header'>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/experience">Experience</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/education">Education</NavLink></li>
                        <li><NavLink to="/skills">Skills</NavLink></li>
                        <li><NavLink to="/recommendations">Recommendations</NavLink></li>
                        <li><NavLink to="/hobbies">Hobbies</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component ={Home}/>
                        <Route exact path="/experience" component ={Experience}/>
                        <Route exact path="/projects" component ={Projects}/>
                        <Route exact path="/education" component ={Education}/>
                        <Route exact path="/skills" component = {Skills}/>
                        <Route exact path="/recommendations" component ={Recommendations}/>
                        <Route exact path="/hobbies" component ={Hobbies}/>
                    </div>
                </div>
                <a href='https://www.linkedin.com/in/emilie-morin/'><img className='linkedin-logo' src={linkedinlogo}/></a>
            </HashRouter>
            
        )
    }
}
export default App;