import { Container } from "reactstrap"
import foundu from "../assets/LogofoundU.jpeg"
import innov from "../assets/innov8podlogo.jpeg"
import people from "../assets/peoplegig_logo.jpeg"
import "./Home.css";
function Partners() {

  return (
        <Container fluid className="text-center landing-section2">
        <h2>Our Partners</h2>
        <div className="logo-section">
            <img src={foundu} alt="FoundU logo"  className="logo" />
            <img src={people} alt="Peoplegig logo" className="logo"  />
            <img src={innov} alt="Innov8Pod logo" className="logo" />
        </div>
        </Container>
  )
}

export default Partners