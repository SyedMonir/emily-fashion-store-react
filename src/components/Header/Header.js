import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../src/logo.png';
import { NavLink } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa';
import { CartContext } from '../../App';

const Header = () => {
  const [cart] = useContext(CartContext);
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
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
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'link'
                }
              >
                Contact
              </NavLink>
              <NavLink to="/shopping-cart" className={'link cart'}>
                <FaCartArrowDown
                  size={'1.3rem'}
                  className="position-relative cart"
                />
                <sup className="cart-length">{cart.length}</sup>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
