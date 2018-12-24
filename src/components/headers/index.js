import React, { Component, Fragment } from "react";
import { Navbar, NavItem } from "react-materialize";

class Header extends Component {
  constructor(props) {
    super(props);
    this.showAutheicatedLinks = this.showAutheicatedLinks.bind(this);
  }

  showAutheicatedLinks() {
    const { token } = localStorage;

    if (token) {
      return (
        <Fragment>
          <NavItem href="/coverletters"> Cover Letter </NavItem>
          <NavItem
            onClick={() => {
              localStorage.clear();
              window.location = "/login";
            }}
          >
            Logout
          </NavItem>
        </Fragment>
      );
    }
    return <NavItem />;
  }

  render() {
    const { showAutheicatedLinks } = this;
    return (
      <Navbar brand="My Job Application" right>
        {showAutheicatedLinks()}
      </Navbar>
    );
  }
}

export default Header;
