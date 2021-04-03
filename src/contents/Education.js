import React, { Component } from 'react';
import Widecard from '../components/Widecard'

class Education extends Component {
  render() {
    return (
      <div className="condiv">
          <h1>My Educatiuon</h1>
          <Widecard title="Infomation Engineering " where="king mongkut's institute of technology ladkrabang" from="2016" to="Present" />
          <Widecard title="Infomation Engineering " where="king mongkut's institute of technology ladkrabang" from="2011" to="2016" />

      </div>
    );
  }
}

export default Education;
