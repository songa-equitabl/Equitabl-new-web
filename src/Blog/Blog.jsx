import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Card, CardImg, CardBody, CardText, Button } from 'reactstrap';
import "./Blog.css";
import stats from "../assets/stats.png";
import office from "../assets/user1.png";
import engineers from "../assets/user3.png";

const Blog = ({ isHomePage = false }) => {
  const blogData = [
    { id: 1, title: "Your Secret Ingredient - Building an Agile, Equitable, and High-Performance Workforce", date: "3, June 2024", image: stats },
    { id: 2, title: "Future of workforce in the Fashion Industry", date: "28, May 2024", image: office },
    { id: 3, title: "Partnership Announcement: Equitabl and FoundU Join Forces!", date: "23, May 2024", image: engineers },
    { id: 4, title: "Understanding Pay Equity from a Compliance perspective", date: "20, May, 2024", image: stats },
    { id: 5, title: "Understanding Pay Equity from a Compliance perspective", date: "12, May 204", image: office },
    { id: 6, title: "Navigating the HR Technology landscape in APAC", date: "6, May 2024", image: engineers },
    { id: 7, title: "4 pitfalls to avoid when building a data driven DEI practice", date: "16, September 2023", image: stats },
    { id: 8, title: "Why ‘median hourly rate’ analysis might not be enough to bridge the ethnic pay gap", date: "30, June 2023", image: office },
    { id: 9, title: "Top 3 ways to address systemic bias using people data", date: "31, May 2023", image: stats },
    { id: 10, title: "How to actually close the gender pay gap", date: "30, March 2023", image: engineers },
    { id: 11, title: "Top 3 beliefs that drive pay inequities in organisations", date: "30, March 2023", image: office },
    { id: 12, title: "Why ESG is trending now and how pay equity fits into it", date: "30, March 2023", image: stats }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  // If isHomePage is true, show only the 3 most recent blogs
  const displayBlogs = isHomePage ? blogData.slice(0, 3) : blogData;

  // Calculate total pages
  const totalPages = Math.ceil(displayBlogs.length / blogsPerPage);

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = displayBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid className="text-center my-5 blog-details-container">
      <h2 className="mb-2">Blogs & Thoughts Leaderships</h2>
      <Row className="my-5">
        {currentBlogs.map(blog => (
          <Col md="4" className="mb-4" key={blog.id}>
            <Card className="h-80 shadow-sm">
              <CardImg top src={blog.image} alt={`blog${blog.id}`} className="blog-image" />
              <CardBody className="d-flex flex-column">
                <CardText className="text-primary flex-grow-1">
                  <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      {!isHomePage && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              color={currentPage === index + 1 ? 'primary' : 'secondary'}
              className="mx-1"
            >
              {index + 1}
            </Button>
          ))}
        </div>
      )}
      {isHomePage && (
        <Link to="/blog" className="see-all-link">
          See All
        </Link>
      )}
    </Container>
  );
};

export default Blog;
