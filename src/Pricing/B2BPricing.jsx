import { Container, Row, Col,} from 'reactstrap';
import "./Pricing.css"
import { TbWorldMinus } from "react-icons/tb";
import { BsDiagram3 } from "react-icons/bs";

const B2BPricing = () => {
  return (
    <Container fluid className=" landing text-center d-flex align-items-center justify-content-center min-vh-100">
    <div>
      <h2>B2B Pricing</h2>
      <Row className="mt-4 ml-5justify-content-center">
        <Col md="6">
          <div className="pricing-card p-4 bg-light-purple">
           <BsDiagram3 className="large-icon"/>
            <h3>Products and Tech Vendors</h3>
            Contact Sales
          </div>
        </Col>
        <Col md="6">
          <div className="pricing-card p-4 bg-light-pink">
            <TbWorldMinus className="large-icon"/>
            <h3>Businesses and Professional Services Firm</h3>
            Contact Sales
          </div>
        </Col>
      </Row>
    </div>
  </Container>
  );
};

export default B2BPricing;
