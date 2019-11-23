import React, { useState, useEffect, onLoad } from "react";
import logo from './logo.svg';
import { Link, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import Routes from "./Routes";

function App(props) {
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
      <div className="App container">
          <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home"></Navbar.Brand>
              <Nav className="mr-auto">
                  <Nav.Link href="/products">Home</Nav.Link>
                  <Nav.Link href="/orders">Orders</Nav.Link>
                  <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Seller
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                          <LinkContainer to="/sellerproducts">
                            <Dropdown.Item>Products</Dropdown.Item>
                          </LinkContainer>
                          <LinkContainer to="/sellerorders">
                              <Dropdown.Item>Orders</Dropdown.Item>
                          </LinkContainer>
                      </Dropdown.Menu>
                  </Dropdown>
              </Nav>
          </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
      </div>
  );
}

export default withRouter(App);
