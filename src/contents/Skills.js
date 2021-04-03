import React, { Component } from 'react';

class Skill extends Component {

    constructor(props){
        super(props);
        this.state = {
            'myskill' : ['HTML','CSS','JS','ReactJS','PHP','SQL']
        }
    }

  render() {
    return (
      <div className="condiv skills" >
          <h1 className='subtopic'>My Skills</h1>
          <ul>
              {this.state.myskill.map((value)=>{
                  return <li>{value}</li>
              })}
          </ul>
      </div>
    );
  }
}

export default Skill;
