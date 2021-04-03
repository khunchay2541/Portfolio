import React,{Component} from 'react'
import Navitems from './Navitems';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }
    render() {
      return (
          <nav>
              <ul>
                  <Navitems item="Home" tolink="/"></Navitems>
                  <Navitems item="About" tolink="/about"></Navitems>
                  <Navitems item="Education" tolink="/education"></Navitems>
                  <Navitems item="Skill" tolink="/skills"></Navitems>
                  <Navitems item="Contract" tolink="/contract"></Navitems>
              </ul>
          </nav>
       )
    };
 }

 export default Navbar
