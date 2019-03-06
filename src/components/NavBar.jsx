import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

const NavBar = ({ user, collapsed, toggleNavBar }) => {
  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          vidly
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavBar} className="mr-2" />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar>
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
};

export default NavBar;
