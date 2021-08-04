import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Production from "./pages/Production";

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <Router>
        <div>
          <div>
            <Navbar
              light
              expand="md"
              className="d-flex justify-content-between "
            >
              <div>
                <img
                  src="https://osten.vercel.app/images/osten.svg"
                  className="logo"
                  alt=""
                />
              </div>
              <div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav navbar className="barnav">
                    <NavItem>
                      <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/production">Production</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/news">News</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/contact">Contact</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </div>
            </Navbar>
          </div>

          <hr />

          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/production">
                <Production></Production>
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

function News() {
  return (
    <div>
      <h2>News</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

export default App;
