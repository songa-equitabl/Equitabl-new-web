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
import logo from '../assets/logo.ico';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-container">
      <Navbar expand="md">
        <NavbarBrand className="navbar-brand" tag={Link} to="/">
          <img src={logo} alt="Equitabl Logo" className="navbar-logo" />
          Equitabl
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
             <NavItem>
              <RouterNavLink exact to="/"className="nav-link" activeClassName="active">Products</RouterNavLink>
             </NavItem>
            <NavItem>
              <RouterNavLink exact to="/pricing" className="nav-link" activeClassName="active">Pricing</RouterNavLink>
            </NavItem>
            <NavItem>
              <RouterNavLink exact to="/Resource" className="nav-link" activeClassName="active">Resources</RouterNavLink>
            </NavItem>
            <NavItem>
              <RouterNavLink exact to="/about" className="nav-link" activeClassName="active">About us</RouterNavLink>
            </NavItem>
          </Nav>
          <NavbarText className="mr-3">
            <Button outline color="primary" className="outline-primary">Login</Button>
          </NavbarText>
          <NavbarText>
            <Button color="primary" className="btn-primary">Book a demo</Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
