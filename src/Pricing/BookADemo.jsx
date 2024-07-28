/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import "./Pricing.css";

import pic from '../assets/image1.png';
import pic2 from '../assets/image2.png';
import pic3 from '../assets/SkillsMap.png';

const images = [pic, pic2, pic3];
const BookADemo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  return (
    <Container fluid className="book-a-demo">
    <Row>
    <Col md="6" className="text-center text-md-left">
          <h2>Book a demo</h2>
          <p>
            In a 30-min call, we'll give you a demo of our product and demonstrate how Equitabl can help you do smarter workforce and financial planning for your business.
          </p>
          <div className="slideshow-container">
            <img src={images[currentSlide]} alt="Demo" className="img-fluid" />
            <div className="dots-container">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
          </div>
        </Col>
      <Col md="6">
        <div className="form-container p-4 bg-white rounded shadow-sm">
          <Form>
            <FormGroup>
              <Label for="firstName">
                First name <span className="text-danger">*</span>
              </Label>
              <Input type="text" name="firstName" id="firstName" required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">
                Last name <span className="text-danger">*</span>
              </Label>
              <Input type="text" name="lastName" id="lastName" required />
            </FormGroup>
            <FormGroup>
              <Label for="email">
                Work email <span className="text-danger">*</span>
              </Label>
              <Input type="email" name="email" id="email" required />
            </FormGroup>
            <FormGroup>
              <Label for="companyName">
                Company name <span className="text-danger">*</span>
              </Label>
              <Input type="text" name="companyName" id="companyName" required />
            </FormGroup>
            <FormGroup>
              <Label for="companySize">
                Company size <span className="text-danger">*</span>
              </Label>
              <Input type="select" name="companySize" id="companySize" required>
                <option>Please Select</option>
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>201-500</option>
                <option>501-1000</option>
                <option>1000+</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="challenges">
                Which of these product features are you interested in? <span className="text-danger">*</span>
              </Label>
              <div>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="challenges" />{' '}
                    Payroll Dashboard
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="challenges" />{' '}
                    Skills Map
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="challenges" />{' '}
                    Skills Planning
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="challenges" />{' '}
                    Pay Gap Analysis
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="challenges" />{' '}
                   WGEA Reporting
                  </Label>
                </FormGroup>
              </div>
            </FormGroup>
            <Button color="primary" className="w-100">Book a demo</Button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
  );
};

export default BookADemo;
