import React, { Component } from "react";
import './Education.css';

class Education extends Component {
    render() {
        return (
            <div>
                <h2>Education</h2>
                <div className='education-box left-box-margin'>
                    <div className='box-header'>University</div>
                    <div>
                        <h3>University of British Columbia</h3>
                        <div>Electrical Engineering (Co-op)</div>
                        <div>Sept, 2016 - Apr, 2021</div>
                    </div>
                    <div>
                        <h3>University of Glasgow (Exchange)</h3>
                        <div>Electrical Engineering</div>
                        <div>Jan - May, 2019</div>
                    </div>
                </div>
                <div className='education-box'>
                    <div className='box-header'>Online/Additional Courses</div>
                    <div>
                        <h3>Deep Learning</h3>
                        <div>University of British Columbia</div>
                        <div>Fall 2020</div>
                    </div>
                    {/* <div>
                        <h3>SQL Basics</h3>
                        <div>Udemy</div>
                        <div>2020</div>
                    </div> */}
                    <div>
                        <h3>Introduction to AI</h3>
                        <div>University of Glasgow</div>
                        <div>2019</div>
                    </div>
                    <div>
                        <h3>Introduction to Data Science in Python</h3>
                        <div>University of Michigan (Coursera)</div>
                        <div>2018</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;