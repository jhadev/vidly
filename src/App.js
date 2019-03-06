import React, { Component } from "react";
import { NavLink, Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/Movies";
import MovieForm from "./components/MovieForm";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/common/ProtectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({
      user
    });
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { user, isOpen } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        {/* <NavBar
          onClick={this.toggleNavbar}
          collapsed={collapsed}
          user={user}
        />{" "} */}
        <div>
          <Navbar className="shadow" color="faded" light>
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
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />{" "}
            <Route path="/login" component={LoginForm} />{" "}
            <Route path="/logout" component={Logout} />{" "}
            <ProtectedRoute path="/movies/:id" component={MovieForm} />{" "}
            <Route
              path="/movies"
              render={props => <Movies {...props} user={this.state.user} />}
            />
            <Route path="/customers" component={Customers} />{" "}
            <Route path="/rentals" component={Rentals} />{" "}
            <Route path="/not-found" component={NotFound} />{" "}
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>{" "}
        </main>{" "}
      </React.Fragment>
    );
  }
}

export default App;
