import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../../../src/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              height="45"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id="menubar">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/men"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
              >
                Men
              </NavLink>
              {/* <NavDropdown title="Men" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              <NavLink
                to="/women"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
              >
                Women
              </NavLink>
              <NavLink
                to="/kid"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
              >
                Kid
              </NavLink>
              <NavLink
                to="/accessories"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
              >
                Accessories
              </NavLink>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
              >
                Contact us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
