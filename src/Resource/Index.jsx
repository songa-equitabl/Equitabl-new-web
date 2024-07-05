import { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardText, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './Resources.css';
import stats from "../assets/stats.png";
import office from "../assets/user1.png";
import engineers from "../assets/user3.png";
import Subscribe from "../subscribe/Subscribe";
import Footer from "../footer/Footer";
const categories = ["Benefits", "DEI", "Engagement", "Global HR Insights", "HR Administration", "HRIS", "Omni News", "Onboarding"];
const allMenus = ["Payroll", "People Management", "Performance", "Recruitment", "Tech", "Time Off"];

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

  const handleMenuClick = (menu) => {
    setActiveCategory("All");
    setActiveMenu(menu);
  };

  return (
    <Container className="resources-container">
      <h1>Your resource for the latest insights, tips, and industry best practices.</h1>
      <p>Sign up for our newsletter for your <strong>Monthly</strong> dose of all things HR, Workforce Data, Future of Work, Diversity, Equity and Inclusion (DEI), and many more.</p>
      <Form inline className="newsletter-form">
        <FormGroup>
          <Label for="firstName" hidden>First Name</Label>
          <Input type="text" name="firstName" id="firstName" placeholder="First Name" className="mr-2" />
        </FormGroup>
        <FormGroup>
          <Label for="email" hidden>Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" className="mr-2" />
        </FormGroup>
        <Button color="primary">Level Up Now!</Button>
      </Form>
      <Nav pills className="categories-nav navbar">
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
      {activeCategory === "All" && (
        <Nav pills className="menus-nav navbar">
          {allMenus.map(menu => (
            <NavItem key={menu}>
              <NavLink 
                href="#"
                className={`category-link nav-link ${activeMenu === menu ? 'active' : ''}`}
                onClick={() => handleMenuClick(menu)}
              >
                {menu}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      )}
      <Row>
        {activeCategory === "All" && !activeMenu && articles.map(article => (
          <Col md="4" key={article.title} className="mb-4">
            <Card>
              <img src={article.image} alt={article.title} className="card-img-top" />
              <CardBody>
                <CardTitle tag="h5">{article.title}</CardTitle>
                <CardText>
                  <small className="text-muted">{article.date}</small>
                </CardText>
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
      <Subscribe/>
      <Footer/>
    </Container>
  );
};

export default Resources;
