import React, { Component } from 'react';
import Social from '../components/Social'
import profilepic from '../img/khunchay.jpg'
import ReactTypingEffect from 'react-typing-effect';

 class Home extends Component {
  render() {
    return (
      <div class="condiv home"> 
            <img src={profilepic} alt="profile" className="profilepic"></img>
            <ReactTypingEffect text={['I am Chaynoy','I am a Web developer']} speed={80} eraseDelay={200} className="typingeffect"/>
            <Social/>
      </div>
    );
  }
}

export default Home