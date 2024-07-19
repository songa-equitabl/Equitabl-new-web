import { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Alert,
} from 'reactstrap';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    businessEmail: '',
    organisation: '',
    country: '',
  });
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate email already registered error
    if (formData.businessEmail === 'already@registered.com') {
      setEmailError('This email is already registered');
    } else {
      setEmailError('');
      // Handle form submission
      console.log(formData);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md="6">
          <h2 className="text-center">Sign up with Equitabl</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="fullName">Full Name</Label>
              <Input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Add text"
                value={formData.fullName}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="jobTitle">Job Title</Label>
              <Input
                type="text"
                name="jobTitle"
                id="jobTitle"
                placeholder="Add text"
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="businessEmail">Business Email</Label>
              <Input
                type="email"
                name="businessEmail"
                id="businessEmail"
                placeholder="Add text"
                value={formData.businessEmail}
                onChange={handleChange}
                className={emailError ? 'is-invalid' : ''}
              />
              {emailError && <Alert color="danger">{emailError}</Alert>}
            </FormGroup>
            <FormGroup>
              <Label for="organisation">Your Organisation</Label>
              <Input
                type="text"
                name="organisation"
                id="organisation"
                placeholder="Add text"
                value={formData.organisation}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="country">Country you're based in</Label>
              <Input
                type="select"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
              </Input>
            </FormGroup>
            <Button color="primary" type="submit" block>
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupForm;
