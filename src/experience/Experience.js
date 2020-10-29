import React, { Component } from "react";
import Download from '@material-ui/icons/GetApp';
import './Experience.css';
import Website from '@material-ui/icons/Language';

class Experience extends Component {
    render() {
        return (
            <div>
                <h2 className='experience-title'>Experience</h2><Download style={{ color: '#000000', fontSize: 40}}/>
                
                <div className='job'>
                    <h3 className="underline">Data Intern  <a href='https://modo.coop/blog/qa-with-emilie'><Website style={{ color: '#000000' }}/></a></h3> 
                    <h4>Modo, Vancouver, Canada</h4>
                    <div className="date">May - Jul, 2020</div>
                </div>
                
                <div className='job'>
                    <h3 className="underline">Data Strategy Intern</h3> 
                    <h4>FISPAN, Vancouver, Canada</h4>
                    <div className="date">Sept- Dec, 2019</div>
                    <li>Collaborated with development, business, and operations teams to produce 
                        data roadmaps, and to establish a company-wide data strategy</li>
                    <li>Utilized AWS Quicksight, and Kibana to aggregate data, and create data 
                        visualizations, dashboards, and insights</li>
                    <li>Presented strategy proposals and proof of concept ideas surrounding data 
                        management and use cases to executive team</li>
                </div>

                <div className='job'>
                    <h3 className="underline">Associate Consultant</h3> 
                    <h4>Farrpoint, Edinburgh, UK</h4>
                    <div className="date">Jun - Aug, 2019</div>
                    <li>Researched the global Internet of Things market and the impact of 5G; presented 
                        findings in a report for the Scottish Government</li>
                    <li>Worked with colleagues and various stakeholders to develop IoT use cases for 
                        rural Scottish communities</li>
                    <li>Wrote python scripts and batch files to automate the daily upload of files to a 
                        PostgreSQL database</li>
                </div>

                <div className='job'>
                    <h3 className="underline">Full-Stack Developer (Co-op)</h3> 
                    <h4>IBM, Toronto, Canada</h4>
                    <div className="date">May - Aug, 2018</div>
                    <li>Developed mobile web applications and web portals in React, using Redux and
                        Graphql, for various client projects</li>
                    <li>Implemented Redux to manage API calls and developed error handling logic for API
                        responses and UI validation</li>
                    <li>Utilized React libraries to create graphs and interactive visualizations, and incorporate
                        internationalization</li>
                </div>

                <div className='job'>
                    <h3 className="underline">Digital Strategy Intern</h3>
                    <h4>Air Canada, Toronto, Canada</h4>
                    <div className="date">Jun - Aug, 2017</div>
                    <li>Collaborated with web development, mobile app, marketing teams, and various agencies to improve the digital marketing platform</li>
                    <li>Utilized Adobe Analytics, AMO, and Google AdWords to conduct analysis of
                        marketing campaign success</li>
                    <li>Presented research and analysis at various technical levels to colleagues,
                        managers and senior leadership</li>
                </div>
            </div>        
        )
    }
}

export default Experience;