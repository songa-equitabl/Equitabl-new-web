import { Container } from "reactstrap";
import CEO from "../assets/Hamsa.jpg";
import CTO from "../assets/Aravind.jpeg";
import COO from "../assets/Durrah.webp";
import bill from "../assets/Bill.webp";
import liz from "../assets/Liz.webp";
import "./Team.css"; 

function Team() {
  return (
    <Container fluid className="text-center text-md-left team-section">
      <h2 className="team-title">Who we are</h2>
      <p className="team-description">
        We are an enthusiastic team of leaders with diverse experience in HR consulting, Technology, Transformation, and People Analytics, driven to achieve Workplace Equity for organisations. We serve clients across industries and global markets.
      </p>
      <div className="team-container">
        <div className="team-member">
          <img src={CEO} alt="CEO's Picture" className="team-image" />
          <h6>Hamsa</h6>
          <span>Chief Executive Officer</span>
        </div>
        <div className="team-member">
          <img src={COO} alt="COO's picture" className="team-image" />
          <h6>Durrah</h6>
          <span>Chief Operations Officer</span>
        </div>
        <div className="team-member">
          <img src={CTO} alt="CTO's Picture" className="team-image" />
          <h6>Aravind</h6>
          <span>Chief Technology Officer</span>
        </div>
        <div className="team-member">
          <img src={bill} alt="Bill Johnston's picture" className="team-image" />
          <h6>Bill Johnston</h6>
          <span>Strategic Growth and Value Proposition Officer</span>
        </div>
        <div className="team-member">
          <img src={liz} alt="Liz Hughes's picture" className="team-image" />
          <h6>Liz Hughes</h6>
          <span>Strategic Advisor - UK and EMEA</span>
        </div>
      </div>
    </Container>
  );
}
export default Team;
