import React from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavbarText,
  Button,
} from 'reactstrap';
import './CustomNavbar.css';
import logo from '../assets/Equitabl-black.png';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-container">
      <Navbar expand="md">
        <div className="navbar-brand">
          <NavbarBrand tag={Link} to="/">
            <img src={logo} alt="Equitabl Logo" className="navbar-logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <RouterNavLink exact to="/" className="nav-link" activeClassName="active">Home</RouterNavLink>
            </NavItem>
            <NavItem>
              <RouterNavLink exact to="/pricing" className="nav-link" activeClassName="active">Pricing</RouterNavLink>
            </NavItem>
            <NavItem>
              <RouterNavLink exact to="/Resource" className="nav-link" activeClassName="active">Resources</RouterNavLink>
            </NavItem>
            <NavItem>
              <RouterNavLink exact to="/about" className="nav-link" activeClassName="active">About Us</RouterNavLink>
            </NavItem>
          </Nav>
          <NavbarText className="mr-3">
            <Button outline color="primary" className="outline-primary">Login</Button>
          </NavbarText>
          <NavbarText>
            <Link to="/form">
              <Button color="primary" className="btn-primary">Book a demo</Button>
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
