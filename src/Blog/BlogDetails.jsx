import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, CardImg, CardText, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Card, CardBody, CardFooter,} from 'reactstrap';
import { FaCalendarAlt, FaFacebookF, FaLinkedinIn, FaLink, FaSmile, FaCamera, FaVideo, FaFileImage } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import stats from "../assets/stats.png";
import office from "../assets/user1.png";
import engineers from "../assets/user3.png";
import './Blog.css'; 

const blogData = [
  {
    id: 1,
    title: "18 strategic HR metrics to measure for success",
    date: "19, May 2024",
    readTime: "5 minutes read",
    images: [stats, office],
    contents: [
      "Detailed content for the first blog post goes here...",
      "More detailed content for the first blog post goes here after the first image..."
    ]
  },
  {
    id: 2,
    title: "Human Resource Planning (HRP) guide and examples",
    date: "2, June 2024",
    readTime: "7 minutes read",
    images: [office, engineers],
    contents: [
      "Detailed content for the second blog post goes here...",
      "More detailed content for the second blog post goes here after the first image..."
    ]
  },
  {
    id: 3,
    title: "Singapore's workplace safety and health act guide",
    date: "5, June 2024",
    readTime: "6 minutes read",
    images: [engineers],
    contents: [
      "Detailed content for the third blog post goes here...",
    ]
  }
];

const recentPosts = blogData.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find(b => b.id.toString() === id);
  const [modal, setModal] = useState(false);
  const [comment, setComment] = useState('');
  const [showButtons, setShowButtons] = useState(false);

  if (!blog) {
    return <p>Blog not found</p>;
  }

  const handleShare = (platform) => {
    const url = window.location.href;
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, '_blank');
  };

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard!');
  };

  const toggleModal = () => setModal(!modal);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    setShowButtons(e.target.value.length > 0);
  };

  const handlePublishComment = () => {
    // Handle comment publish logic here
    alert('Comment published!');
    setComment('');
    setShowButtons(false);
  };

  const handleCancelComment = () => {
    setComment('');
    setShowButtons(false);
  };

  return (
    <Container fluid className="blog-details-container my-5">
      <div className="blog-meta text-muted mb-3 d-flex align-items-center">
        <FaCalendarAlt className="mr-2" />
        {blog.date} • {blog.readTime}
      </div>
      <h2 className="blog-title mb-4">{blog.title}</h2>
      {blog.images.map((image, index) => (
        <div key={index}>
          <CardImg top src={image} alt={blog.title} className="blog-imagee mb-4" />
          <CardText>{blog.contents[index]}</CardText>
        </div>
      ))}
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <FaFacebookF className="mr-3" onClick={() => handleShare('facebook')} style={{ cursor: 'pointer' }} />
          <FaXTwitter className="mr-3" onClick={() => handleShare('twitter')} style={{ cursor: 'pointer' }} />
          <FaLinkedinIn className="mr-3" onClick={() => handleShare('linkedin')} style={{ cursor: 'pointer' }} />
          <FaLink onClick={toggleModal} style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <hr />
      <h4>Recent Posts</h4>
      <Row>
        {recentPosts.map(post => (
          <Col md="4" key={post.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <CardImg top src={post.images[0]} alt={post.title} className="blog-image" />
              <CardBody className="d-flex flex-column">
                <CardText className="text-primary flex-grow-1">
                  <a href={`/blog/${post.id}`}>{post.title}</a>
                </CardText>
              </CardBody>
              <CardFooter className="d-flex align-items-center">
                <FaCalendarAlt className="mr-2" />
                <span>{post.date}</span>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-right">
        <a href="/blog">See all</a>
      </div>
      
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Share Link</ModalHeader>
        <ModalBody>
          <Input type="text" value={window.location.href} readOnly />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
          <Button color="primary" onClick={copyToClipboard}>Copy Link</Button>
        </ModalFooter>
      </Modal>

      <hr />
      <h4 className="mb-3">Comments</h4>
      <hr />
      <div className="comment-section">
        <div className="comment-container">
          <textarea
            className="comment-input"
            placeholder="Write a comment..."
            value={comment}
            onChange={handleCommentChange}
          />
          <div className="comment-icons">
            <Button outline>
              <FaSmile />
            </Button>
            <Button outline>
              <FaCamera />
            </Button>
            <Button outline>
              <FaFileImage />
            </Button>
            <Button outline>
              <FaVideo />
            </Button>
          </div>
          {showButtons && (
            <div className="comment-buttons">
              <Button color="secondary" onClick={handleCancelComment}>Cancel</Button>
              <Button color="primary" onClick={handlePublishComment}>Publish</Button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default BlogDetails;
