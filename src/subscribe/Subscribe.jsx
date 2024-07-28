import { Container, Row, Col, Button } from 'reactstrap';
import { TiTick } from 'react-icons/ti';
import '../Home/Home.css'; 
import { Link } from 'react-router-dom';

const Subscribe = () => {
  return (
    <Container fluid className="subscribe-section">
      <div  className="text-center">
        <h2 className="mb-3">Ready to supercharge your business?</h2>
        <span className="mb-4 d-block">Plan starts from $99/month</span>
        <div className="mb-4">
          <Link to="/form">
          <Button color="primary" className="mr-3">Start Your 14 Days Trial</Button>
          </Link>
          <Link to="/pricing">
            <Button color="outline-primary">View Pricing Plans</Button>
          </Link>
        </div>
        <Row className="justify-content-center">
          <Col xs="auto" className="d-flex align-items-center">
            <TiTick className="mr-1 text-primary" /> 14 days free trial
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <TiTick className="mr-1 text-primary" /> No implementation fee
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <TiTick className="mr-1 text-primary" /> No hidden cost
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Subscribe;
