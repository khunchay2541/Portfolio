import React, { Component } from 'react';
import profilepic from '../img/khunchay.jpg'
class About extends Component {
  render() {
    return (
      <div className="condiv about"> 
            <h1 className="subtopic">About Me</h1>
            <img src={profilepic} alt="profile" className="profilepic"></img>
            <h3>Hi, I'm Chaynoy</h3>
            <p>lorem</p>
      </div>
    );
  }
}

export default About;
