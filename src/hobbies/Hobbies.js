import React, { Component } from "react";
import ski from '../assets/ski.jpg';
import golf from '../assets/golf.jpg';
import hike from '../assets/hike.JPG';
import hockey from '../assets/hockey.jpg';
import painting1 from '../assets/painting1.jpg';
import painting2 from '../assets/painting2.jpg';
import painting3 from '../assets/painting3.jpg';
import painting4 from '../assets/painting4.jpg';
import painting5 from '../assets/painting5.jpg';
import painting6 from '../assets/painting6.jpg';
import painting7 from '../assets/painting7.jpg';
import './Hobbies.css';

class Hobbies extends Component {
    render() {
        return (
            <div>
                <h2>Sports</h2>
                <div className="interest-container">
                        <h3>Hockey</h3>
                        <div >
                            <img className="interest-photo" src={hockey} />
                        </div>
                    </div>
                    <div className="interest-container">
                        <h3>Skiing</h3>
                        <div >
                            <img className="interest-photo" src={ski} />
                        </div>
                    </div>
                    <div className="interest-container">
                        <h3>Golf</h3>
                        <div >
                            <img className="interest-photo" src={golf} />
                        </div>
                    </div>
                    <div className="interest-container">
                        <h3>Hiking</h3>
                        <div >
                            <img className="interest-photo" src={hike} />
                        </div>
                    </div>
                <h2>Painting</h2>
                <div className="interest-container">
                    <div >
                        <img className="interest-photo" src={painting1} />
                    </div>
                    <div >
                        <img className="interest-photo" src={painting3} />
                    </div>
                </div>
                <div className="interest-container">
                    <div >
                        <img className="interest-photo" src={painting2} />
                    </div>
                </div>
                <div className="interest-container">
                    <div >
                        <img className="interest-photo" src={painting4} />
                    </div>
                    <div >
                        <img className="interest-photo" src={painting5} />
                    </div>
                </div>
                <div className="interest-container">
                    <div >
                        <img className="interest-photo" src={painting6} />
                    </div>
                    <div >
                        <img className="interest-photo" src={painting7} />
                    </div>
                </div>
            </div>
        )
    }
}
    
export default Hobbies;