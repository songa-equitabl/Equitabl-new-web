import image from '../assets/image1.png'; 
import { FaArrowRight } from "react-icons/fa";
import { Row, Col, Button } from 'reactstrap';
import './Home.css';
const Header = () => {
  return (
    <div className="landing-section ">
      <Row className="align-items-center">
        <Col md="6" className="text-center text-md-left mb-4 mb-md-0">
          <h2>Equitabl Business Intelligence</h2>
          <p>Seamlessly integrate HR and Finance data for smarter Financial and Workforce Planning.</p>
          <Button color="primary">
            Book a demo <FaArrowRight />
          </Button>
        </Col>
        <Col md="6" className="text-center">
          <img src={image} alt="landing page" className="img-fluid img-header" />
        </Col>
      </Row>
    </div>
  );
}

export default Header;
