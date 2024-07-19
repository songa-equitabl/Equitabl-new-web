import { FaCompressArrowsAlt } from "react-icons/fa";
import { GiMagicBroom } from "react-icons/gi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaChalkboardUser } from "react-icons/fa6";
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import "./Home.css";
const MiddleSection2 = () => {
    
  return (
    <Container fluid className="text-center landing-section2">
    <h2>An intuitive Multi-source Analysis Platform for Enterprise</h2>
    <p>We integrate with most of the HRIS platforms in the business</p>
    
    <Row className="my-5">
      <Col md="6">
        <ListGroup className="text-left">
          <ListGroupItem className="d-flex align-items-start custom-list-group-item">
            <FaCompressArrowsAlt size={45} className="mr-3" />
            <div>
              <h5>We integrate all your data resources</h5>
              <p>Say goodbye to manual data consolidation, data cleaning, governance, and security. With our advanced platform, this will be your one-stop solution for workforce and financial planning.</p>
            </div>
          </ListGroupItem>
          <ListGroupItem className="d-flex align-items-start custom-list-group-item">
            <GiMagicBroom size={45} className="mr-3" />
            <div>
              <h5>We customise at scale</h5>
              <p>A SaaS platform that is personalised for what matters most for your organisation, with insights customised specifically for your needs.</p>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Col>
      
      <Col md="6">
        <ListGroup className="text-left">
          <ListGroupItem className="d-flex align-items-start custom-list-group-item">
            <MdOutlineSettingsSuggest size={45} className="mr-3" />
            <div>
              <h5>We are small and medium business friendly</h5>
              <p>We partner, collaborate with and work for small and medium business in the APAC region. We are known for our SMB friendly pricing, network and customer service.</p>
            </div>
          </ListGroupItem>
          <ListGroupItem className="d-flex align-items-start custom-list-group-item">
            <FaChalkboardUser size={45} className="mr-3" />
            <div>
              <h5>Dedicated Success Manager</h5>
              <p>Never have to raise tickets for anything, our Customer Success Manager will always be here for you.</p>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  </Container>
);
};

export default MiddleSection2