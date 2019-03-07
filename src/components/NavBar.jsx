import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    const { user } = this.props;

    return (
      <div>
        <Navbar className="shadow" color="light" light expand="md">
          <NavbarBrand href="/" className="mr-auto">
            vidly
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-item nav-link" to="/movies">
                  Movies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item nav-link" to="/customers">
                  Customers
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item nav-link" to="/rentals">
                  Rentals
                </NavLink>
              </NavItem>
              {!user && (
                <React.Fragment>
                  <NavItem>
                    <NavLink className="nav-item nav-link" to="/login">
                      Login
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-item nav-link" to="/register">
                      Register
                    </NavLink>
                  </NavItem>
                </React.Fragment>
              )}
              {user && (
                <React.Fragment>
                  <NavItem>
                    <NavLink className="nav-item nav-link" to="/profile">
                      {user.name}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-item nav-link" to="/logout">
                      Logout
                    </NavLink>
                  </NavItem>
                </React.Fragment>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
