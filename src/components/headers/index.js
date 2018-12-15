import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";

class Header extends Component {
  constructor(props) {
    super(props);
    this.showLogout = this.showLogout.bind(this);
  }

  showLogout() {
    const { token } = localStorage;

    if (token) {
      return (
        <NavItem
          onClick={() => {
            localStorage.clear();
            window.location = "/login";
          }}
        >
          Logout
        </NavItem>
      );
    }
    return <NavItem />;
  }

  render() {
    const { showLogout } = this;
    return (
      <Navbar brand="My Job Application" right>
        {showLogout()}
      </Navbar>
    );
  }
}

export default Header;
