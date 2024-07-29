import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Pricing.css'; 

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <div className="background-image"></div>
      <Container className="form-containerr">
        <Row>
          <Col>
            <h2 className="text-center">Our Pricing</h2>
            <Form>
              <FormGroup>
                <Label for="relationshipSelect">Select the relationship</Label>
                <Input type="select" name="relationship" id="relationshipSelect">
                  <option>I'm a HR Tech product company</option>
                  <option>I'm a professional services provider</option>
                  <option>I'm an independent consulting company</option>
                  <option>I'm a business operating in an industry</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="fullName">Your Full Name *</Label>
                <Input type="text" name="fullName" id="fullName" />
              </FormGroup>
              <FormGroup>
                <Label for="businessEmail">Your Business Email *</Label>
                <Input type="email" name="businessEmail" id="businessEmail" />
              </FormGroup>
              <FormGroup>
                <Label for="title">Your Title *</Label>
                <Input type="text" name="title" id="title" />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  I consent to Equitabl using my details to reach out to me in the future for purposes related to their product.
                </Label>
              </FormGroup>
              <Button color="primary" className="mt-3">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PricingPage;
