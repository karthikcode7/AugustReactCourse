import React, { Component } from "react";
import './Header.css';

//Functional Component Example.
// const Header = () => {
//     return(
//         <div>
//             <center>
//                 <h2>Online Market</h2>
//             </center>

//         </div>
//     )
// }

//Class Component Example
class Header extends Component {
  render() {

    const myStyle = {
        header:{
                backgroundColor: 'rgb(51, 230, 185)',
                textAlign: 'center'
        }
    }
       return (
      <React.Fragment>
        <header style={myStyle.header}>
          <div className="logo">Online App Store </div>
          <input />
          <div style={{ color: "red", fontSize:'16px',textAlign:'center'}}>User Text Here</div>
        </header>
        <center></center>
      </React.Fragment>
    );
  }
}

export default Header;
