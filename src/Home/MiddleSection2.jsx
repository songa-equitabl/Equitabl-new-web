import { FaCompressArrowsAlt } from "react-icons/fa";
import { GiMagicBroom } from "react-icons/gi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaChalkboardUser } from "react-icons/fa6";
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import "./Home.css";
const MiddleSection2 = () => {
    
  return (
    <Container fluid className="text-center">
    <h2>An intuative Multi-source Analysis platform for enterprise</h2>
    <p>We integrate with most HRIS platforms in the business</p>
    
    <Row className="my-5">
      <Col md="6">
        <ListGroup className="text-left">
          <ListGroupItem className="d-flex align-items-start custom-list-group-item">
            <FaCompressArrowsAlt size={45} className="mr-3" />
            <div>
              <h5>Your digital talent intelligence hub</h5>
              <p>Say goodbye to manual data consolidation, data cleaning, governance, and security. With our advanced platform, this will be your one-stop solution for workforce and financial planning.</p>
            </div>
          </ListGroupItem>
          <ListGroupItem className="d-flex align-items-start custom-list-group-item">
            <GiMagicBroom size={45} className="mr-3" />
            <div>
              <h5>Scale your unique people process</h5>
              <p>Unlike rigid software, Equitabl allows you to customize databases and workflows, so you will not have to change how you work to fit a system.</p>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Col>
      
      <Col md="6">
        <ListGroup className="text-left">
          <ListGroupItem className="d-flex align-items-start custom-list-group-item">
            <MdOutlineSettingsSuggest size={45} className="mr-3" />
            <div>
              <h5>Automate manual, repetitive tasks</h5>
              <p>Do not waste time chasing paperwork, updating employee data manually, or preparing repetitive reports. Let Equitabl do it for you.</p>
            </div>
          </ListGroupItem>
          <ListGroupItem className="d-flex align-items-start custom-list-group-item">
            <FaChalkboardUser size={45} className="mr-3" />
            <div>
              <h5>Dedicated Success Manager</h5>
              <p>Never have to raise tickets for anything, our customer success manager will always be here for you.</p>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  </Container>
);
};

export default MiddleSection2