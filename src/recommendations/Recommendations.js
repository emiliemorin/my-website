import React, { Component } from "react";

class Recommendations extends Component {
    render() {
        return (
            <div>
                <h2>Recommendations</h2>
                <div className='quote-box'>
                    <span className='quote'>" </span>
                    <span className='quote-text'>Emilie worked as an intern for the Data team at Modo Coop. She came in to help during the COVID-19 outbreak to help us analyze the problems and generate solutions for these trying times. Thanks to her exceptional Python skills, she developed really useful insights and guidelines for us to recover as smoothly as possible. Her clean coding practices allowed us to continue where she left off with ease. I really cannot recommend Emilie enough!</span>
                    <div></div>
                    <h3> - Colleague at Modo</h3>
                    <div>
                        <a href='https://www.linkedin.com/in/emilie-morin/'>(Link to Comment)</a>
                    </div>
                </div>
                <div className='quote-box'>
                    <span className='quote'>" </span>
                    <span className='quote-text'>Emilie worked as an intern for the Watson IoT team at IBM. She was an exceptional intern. She was very proactive and always went above and beyond. She made sure she used the best practices while coding. She was always open to feedback and took it in a very positive manner. I had an awesome time working with Emilie and she was definitely a great addition to the team!</span>
                    <div></div>
                    <h3> - Manager at IBM</h3>
                    <div>
                        <a href='https://www.linkedin.com/in/emilie-morin/'>(Link to Comment)</a>
                    </div>
                </div>
                <div className='quote-box'>
                    <span className='quote'>" </span>
                    <span className='quote-text'>Emilie is an Amazing Talent.</span>
                    <div></div>
                    <h3> - VP of Ecommerce at Air Canada</h3>
                    <div>
                        <a href='https://www.linkedin.com/feed/update/urn:li:activity:6682317887547441152?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A6682317887547441152%2C6682320110411165696%29'>(Link to Comment)</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recommendations;

