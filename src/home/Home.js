import React, { Component } from "react";
import './Home.css';
import headshot from '../assets/headshot.JPG'
import timeline from '../assets/timeline-cropped.png'
import Modal from './Modal'

class Home extends Component {
    state = { showAC: false };

    showAC = () => {
        this.setState({ showAC: true });
    };

    hideAC = () => {
        this.setState({ showAC: false });
      };

    showIBM = () => {
        this.setState({ showIBM: true });
    }

    hideIBM = () => {
        this.setState({ showIBM: false });
      };

    showFarrpoint = () => {
        this.setState({ showFarrpoint: true });
    }

    hideFarrpoint = () => {
        this.setState({ showFarrpoint: false });
      };

    showFispan = () => {
        this.setState({ showFispan: true });
    }

    hideFispan = () => {
        this.setState({ showFispan: false });
      };
    
    showModo= () => {
        this.setState({ showModo: true });
    }

    hideModo= () => {
        this.setState({ showModo: false });
      };

    render() {
        return (
            <div>
                {/* <h2>About Me</h2> */}
                    <div className='bio'>
                        <p className='bio-intro'>
                            <span>Hi, my name is </span>
                            <span className='name'>Emilie!</span>
                        </p>
                        <p>I am a data enthusiast and enjoy using innovative technology to solve challeging problems. </p>
                        <p>I study Electrical Engineering at the University of British Columbia. Through internships, 
                            I have gained work experience in Digital Strategy, Full-Stack Development, Consulting, Data Strategy, and Data Science.
                            I look forward to my next challenge post graduation in 2021.</p>
                        <p>Outside of school, I am Co-Captain of an engineering design team, and enjoy staying active through hiking, skiing, and playing hockey.</p>
                        <p>Check out my website, built in React!</p>
                    </div>
                    
                    <div className='headshot'>
                        <img src={headshot}/>
                    </div>
                    {/* <div>
                        <img src={timeline} className='timeline'/>
                    </div>
                    <div className='first-cirlce'></div> */}
                                <div className="timeline-circles-container">
                <div className="circle-box company-circle" onClick={this.showAC}>
                        <div className="timeline-circle light-blue-circle">
                            <div>Air Canada</div>
                        </div>
                </div>
                <Modal show={this.state.showAC} handleClose={this.hideAC}>
                    <h3>Air Canada</h3>
                    <p>I worked on the Digital Strategy Team at Air Canada.</p>
                </Modal>
                <div className="circle-box company-circle" onClick={this.showIBM}>
                        <div className="timeline-circle blue-circle">
                            <div>IBM</div>
                        </div>
                </div>
                <Modal show={this.state.showIBM} handleClose={this.hideIBM}>
                    <h3>IBM</h3>
                    <p>At IBM, I worked on the Watson IoT (Internet of Things) team in Toronto. This team is in the Global Business Services sector of IBM Canada.</p>
                </Modal>
                <div className="circle-box company-circle" onClick={this.showFarrpoint}>
                        <div className="timeline-circle medium-blue-circle">
                            <div>Farrpoint</div>
                        </div>
                </div>
                <Modal show={this.state.showFarrpoint} handleClose={this.hideFarrpoint}>
                    <h3>Farrpoint</h3>
                    <p>Farrpoint is an IT and Telecommunications consulting firm in Edinburgh, Scotland. During this internship, I primarily researched the potential for IoT in rural Scotland.</p>
                </Modal>
                <div className="circle-box company-circle" onClick={this.showFispan}>
                        <div className="timeline-circle medium-blue-circle">
                            <div>FISPAN</div>
                        </div>
                </div>
                <Modal show={this.state.showFispan} handleClose={this.hideFispan}>
                    <h3>Fispan</h3>
                    <p>Fispan is a Fintech startup in Vancouver. I was the company's first data intern and helped establish a company-wide data strategy.</p>
                </Modal>
                <div className="circle-box company-circle" onClick={this.showModo}>
                        <div className="timeline-circle dark-blue-circle">
                            <div>Modo</div>
                        </div>
                </div>
                <Modal show={this.state.showModo} handleClose={this.hideModo}>
                    <h3>Modo</h3>
                    <p>Modo is a carshare co-operative in Vancouver. At Modo, I analysed usage data during the Covid-19 pandemic in order to inform a growth strategy post pandemic.</p>
                </Modal>
            </div>
            <div className="timeline">
                <img width="100%"
                src={timeline}
                />
            </div>
            <div className="timeline-circles-container">
                <div className="circle-box tbog-circle-box">
                        <div className="timeline-circle tbog-circle">
                            <div>Concrete Toboggan Team</div>
                        </div>
                </div>
                <div className="circle-box hockey-circle-box">
                        <div className="timeline-circle hockey-circle">
                            <div>Hockey</div>
                        </div>
                </div>
                <div className="circle-box captain-circle-box">
                        <div className="timeline-circle captain-circle">
                            <div>Concrete Toboggan Team Captain</div>
                        </div>
                </div>
            </div>
            <p className='footer'>Click on the cicles to find out more about my role at each company!</p>
            </div>        
        )
    }
}

export default Home;