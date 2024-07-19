import { Container, Row, Col } from 'reactstrap';
import logo from "../assets/logo.ico";
import { Link } from 'react-router-dom';
import '../Home/Home.css';

const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Row className="align-items-center">
        <Col className="d-flex justify-content-start">
          <Link to="/privacy-policy" className="footer-link">Our Privacy Policy</Link>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <img src={logo} alt="logo" className="footer-logo mr-2" />
          <span className="footer-text">All rights reserved</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
