import React, { Component } from "react";
import './Projects.css';
import video from '../assets/car-project.mp4';
import lumohacks from '../assets/lumohacks-2018.jpg';
import toboggan from '../assets/concrete-toboggan.JPG';
import Website from '@material-ui/icons/Language';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPlay: true
        }
        this.playPauseVideo= this.playPauseVideo.bind(this);
    }

    // function to play and pause video
    playPauseVideo() {
        if (this.state.showPlay) {
            this.refs.video.play();
            this.setState({
                showPlay: false
            })
        }
        else {
            this.refs.video.pause();
            this.setState({
                showPlay: true
            })
        }
    }
    
    render() {
        return (
            <div>
                <h2>Projects</h2>

                <div className='project-container'>
                    <h3 className='underline'>UBC Concrete Toboggan Design Team  <a href='http://toboggan.sites.olt.ubc.ca/'><Website style={{ color: '#000000' }}/></a></h3>
                    <div className="position-box">
                        <div className='subtitle'>Co-Captain</div>
                        <li>Lead engineering design team of 60 students from various faculties including Civil, Mechanical, Electrical, Geological, and Integrated Engineering</li>
                        <li>Organize project schedule and lead team and executive meetings</li>
                        <li>Apply for funding and manage project budget of $40,000</li>
                    </div>
                    <div className="position-box">
                        <div className='subtitle'>Team Member</div>
                        <li>Work with Electrical, Mechanical, and Civil engineering students to design an innovative toboggan design</li>
                        <li>Integrated Particle IoT boards with Google Cloud Platform Firestore database and automated the upload of sensor data</li>
                        <li>Developed a React.js application to view real-time sensor data</li>
                    </div>
                    <img className="photo" src={toboggan} />
                </div>

                <h3 className='underline'>Motion Controlled Car</h3>
                <li>Collaborated with a team of students to design and develop transmitter and receiver circuits to send instructions to a car</li>
                <li>Built a glove that utilized an accelerometer to control the car</li>
                
                <div className="video-container">
                    <video ref="video" className="photo" type="video/mp4" src={video} onClick={this.playPauseVideo.bind(this)}></video>
                    <div>
                        {this.state.showPlay ? 
                            <button className="play-pause" onClick={this.playPauseVideo.bind(this)}>PLAY</button>
                        :
                        <button className="play-pause" onClick={this.playPauseVideo.bind(this)}>PAUSE</button>}
                    </div>
                </div>

                <h3 className='underline'>IBM North America Intern Hackathon 2018</h3>
                <li>Collaborated with team to develop a AR application for an office desk reservation system</li>
                <li>Developed use case and business model, and presented the product to executive judges</li>
                <li>Won Bring Your Own Technology category</li>

                <div className="embedded-link">
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6423653836493189120" height="530" width="504" frameborder="0" allowfullscreen=""></iframe>
                </div>

                <h3 className='underline'>Lumohacks 2018</h3>
                <li>Led team in the development of a web app aimed to help people be proactive about their mental health</li>
                <li>Produced storyboards, architecture outlines, and developed the application in React.js</li>
                <li>Placed in top 15 teams</li>

                <img className="photo" src={lumohacks} />

                <h3 className="underline">AI Agent Comparison</h3>
                <li>Implemented Q-Learning and A-star maze solving algorithms in Python</li>
                <li>Optimized the Q-learning function variables to improve results</li>
                <li>Tested the algorithms and compared them using charts and graphs</li>
            </div>        
        )
    }
}

export default Projects;