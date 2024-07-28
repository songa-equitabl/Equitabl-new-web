import { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Nav, NavItem, NavLink, Card, CardBody, CardTitle, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './Resources.css';
import stats from "../assets/stats.png";
import office from "../assets/user1.png";
import engineers from "../assets/user3.png";
const categories = ["Diversity, Equity and Inclusion (DEI)", "Pay Gaps", "HR Analytics", "Skills", "Payroll", "HR Technology", "Global Trends"];
const articles = [
  {
    title: "Tips For Increasing Workplace Efficiency And How HRIS Can Help",
    date: "23, Apr 2024",
    image: stats
  },
  {
    title: "Employee Data Management: How HRIS Can Help Achieve Accuracy And Security",
    date: "22, Apr 2024",
    image: office
  },
  {
    title: "18 Strategic HR Metrics To Measure For Success",
    date: "19, Apr 2024",
    image: engineers
  }
];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeMenu, setActiveMenu] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveMenu(null);
  };
  return (
    <Container className="resources-container custom-padding">
      <h3>Your resource for the latest insights, tips, and industry best practices.</h3>
      <p style={{fontSize:"12px"}}>Sign up for our newsletter for your <strong>Monthly</strong> dose of all things HR, Workforce Data, Future of Work, Diversity, Equity and Inclusion (DEI), and many more.</p>
      <Form inline className="newsletter-form">
        <FormGroup className="form-group">
          <Label for="firstName" hidden>First Name</Label>
          <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="email" hidden>Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </FormGroup>
        <Button color="primary">Level Up Now!</Button>
      </Form>
      <Nav pills className="categories-nav menus-nav navbar">
        <NavItem>
          <NavLink 
            href="#"
            className={`category-link nav-link ${activeCategory === "All" && !activeMenu ? 'active' : ''}`}
            onClick={() => handleCategoryClick("All")}
          >
            All
          </NavLink>
        </NavItem>
  {categories.map(category => (
    <NavItem key={category}>
      <NavLink 
        href="#"
        className={`category-link nav-link ${activeCategory === category ? 'active' : ''}`}
        onClick={() => handleCategoryClick(category)}
      >
        {category}
      </NavLink>
    </NavItem>
  ))}
</Nav>
<Row className="my-3">
  {activeCategory === "All" && !activeMenu && articles.map(article => (
    <Col md="4" key={article.title} className="cards">
      <Card className="shadow-sm">
        <img src={article.image} alt={article.title} className="blog-image" />
        <CardBody className="d-flex flex-column">
          <CardTitle tag="p" className="text-primary flex-grow-1">
            {article.title}
          </CardTitle>
        </CardBody>
      </Card>
    </Col>
  ))}
  {activeCategory === "All" && activeMenu && (
    <Col md="12">
      <h2>{activeMenu}</h2>
    </Col>
  )}
  {activeCategory !== "All" && (
    <Col md="12">
      <h2>{activeCategory} Clicked</h2>
    </Col>
  )}
</Row>


      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    </Container>
  );
};

export default Resources;
