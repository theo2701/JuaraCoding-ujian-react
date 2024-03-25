import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarHeader = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* <NavLink to="/catalog">Home</NavLink>
            <NavLink to="/feature">Features</NavLink>
            <NavLink to="/pricing">Pricing</NavLink> */}
            <LinkContainer to="/catalog">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/feature">
              <Nav.Link>Feature</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pricing">
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarHeader;
