
import { Container } from 'reactstrap';
import logo from "../assets/logo.ico";
import '../Home/Home.css'

const Footer = () => {
  return (
    <Container fluid className="footer-container d-flex justify-content-end align-items-center">
      <img src={logo} alt="logo" className="footer-logo mr-2" />
      <span className="footer-text">All rights reserved</span>
    </Container>
  );
}

export default Footer;
