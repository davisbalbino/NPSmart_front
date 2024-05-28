import React, { Component } from "react";
import "./css/navbar.css"; 
import bulb from "./imgs/bulb.png";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">
          <div class="menu-icon">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
          <div className="icon-logo">
            <img src={bulb} alt="" />
          </div>
          <span className="title-logo">NPMSART FRONT</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
