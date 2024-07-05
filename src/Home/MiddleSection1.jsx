import { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { FaFolderOpen, FaIdCardAlt, FaUserPlus, FaCalendarAlt } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import image2 from '../assets/image2.png';
import image3 from '../assets/SkillsMap.png';  
import image4 from '../assets/WorkforcePlaning.png';
import image5 from '../assets/GenderPaygapanalysis.png';
import image6 from '../assets/WGEAReporting.png';
import "./Home.css";

const images = {
  "Payroll Dashboard": image2,
  "Skills Map": image3,
  "Workforce Planning": image4,
  "Pay Gap Reporting": image5,
  "WGEA Reporting": image6,
};

const MiddleSection1 = () => {
  const [selectedButton, setSelectedButton] = useState("Payroll Dashboard");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <Container fluid className="dashboard-container">
      <h2>Everything you need to make data-driven solutions about your business</h2>
      <p>Our APIs are designed for every HR and financial analytics use case for your business. If you don't find one below, we will create custome dashboard & report per your requirements. </p>
      <Row className="content">
        <Col md="3" className="button-col">
          <ul className="button-list">
            <li>
              <Button className={`custom-button ${selectedButton === "Payroll Dashboard" ? "selected" : ""}`} onClick={() => handleButtonClick("Payroll Dashboard")}>
                <FaFolderOpen className="icon" /> Payroll Dashboard
              </Button>
            </li>
            <li>
              <Button className={`custom-button ${selectedButton === "Skills Map" ? "selected" : ""}`} onClick={() => handleButtonClick("Skills Map")}>
                <FaIdCardAlt className="icon" /> Skills Map
              </Button>
            </li>
            <li>
              <Button className={`custom-button ${selectedButton === "Workforce Planning" ? "selected" : ""}`} onClick={() => handleButtonClick("Workforce Planning")}>
                <FaUserPlus className="icon" /> Workforce Planning
              </Button>
            </li>
            <li>
              <Button className={`custom-button ${selectedButton === "Pay Gap Reporting" ? "selected" : ""}`} onClick={() => handleButtonClick("Pay Gap Reporting")}>
                <BsGraphUpArrow className="icon" /> Pay Gap Reporting
              </Button>
            </li>
            <li>
              <Button className={`custom-button ${selectedButton === "WGEA Reporting" ? "selected" : ""}`} onClick={() => handleButtonClick("WGEA Reporting")}>
                <FaCalendarAlt className="icon" /> WGEA Reporting
              </Button>
            </li>
          </ul>
        </Col>
        <Col md="9" className="image-col">
          <img src={images[selectedButton]} alt="page-screen" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default MiddleSection1;
