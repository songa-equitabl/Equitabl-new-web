import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import "./Pricing.css";
import pic from "../assets/image1.png";
const BookADemo = () => {
  return (
    <Container fluid className="book-a-demo">
    <Row>
      <Col md="6" className="text-center text-md-left">
        <h2>Book a demo</h2>
        <p>
          In a 30-min call, we'll give you a tour of our software and demonstrate how Omni can help you automate your end-to-end HR processes!
        </p>
        <img src={pic} alt="Demo" className="img-fluid" />
        <p>Time tracking</p>
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
                What challenges are you looking to solve with an HR software? <span className="text-danger">*</span>
              </Label>
              <div>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="challenges" />{' '}
                    Organizing employee data and automating HR processes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="challenges" />{' '}
                    Recruitment
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="challenges" />{' '}
                    Onboarding
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="challenges" />{' '}
                    Leave management
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="challenges" />{' '}
                    Time tracking
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="challenges" />{' '}
                    Performance
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="challenges" />{' '}
                    Payroll
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="challenges" />{' '}
                    Reimbursement (claims)
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
