import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <NavLink to="/" className="navbar">Home</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="category/Nike" className="navbar separacion">Nike</NavLink>
            <NavLink to="category/Adidas" className="navbar">Adidas</NavLink>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </header>
  );
};
