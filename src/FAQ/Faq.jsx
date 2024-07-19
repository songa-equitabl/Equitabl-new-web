import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Container, ListGroup, ListGroupItem, Collapse } from 'reactstrap';
import "./Faq.css";

function Faq() {
  const [openSections, setOpenSections] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  const toggle = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <Container fluid className="mt-5 pt-4 mb-5 landing-section3">
      <h2 className="text-center">FAQ</h2>
      <ListGroup className="faq-list-group">
        <ListGroupItem 
          className={`d-flex justify-content-between align-items-center ${openSections.section1 ? 'active' : ''}`} 
          onClick={() => toggle('section1')} 
          style={{ cursor: 'pointer' }}
        >
          What are the main benefits of using Equitabl?
          {openSections.section1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </ListGroupItem>
        <Collapse isOpen={openSections.section1}>
          <ListGroupItem><b>Integrated Data:</b> Seamlessly combines HR and Finance data to formulate insights, eliminating the need for manual data consolidation.</ListGroupItem>
          <ListGroupItem><b>Customizable Solutions:</b> Offers custom dashboards and reports tailored to specific business requirements such as skills mapping, workforce planning, pay gap analysis, WGEA reporting, and payroll.</ListGroupItem>
          <ListGroupItem><b>Intuitive Multi-Source Analysis:</b> Provides an easy-to-use platform for analyzing data from multiple sources, enhancing decision-making capabilities.</ListGroupItem>
          <ListGroupItem><b>SaaS Platform:</b> As a Software as a Service (SaaS) platform, it ensures accessibility and scalability without the need for extensive in-house IT infrastructure. SMB Friendly: Known for competitive pricing, strong network, and excellent customer service tailored to small and medium businesses.</ListGroupItem>
          <ListGroupItem><b>Advanced Insights:</b> Delivers personalized insights and analytics specific to organizational needs, helping businesses make informed decisions.</ListGroupItem>
          <ListGroupItem><b>Enhanced Planning:</b> Facilitates smarter financial and workforce planning, helping businesses optimize their operations and resources.</ListGroupItem>
        </Collapse>
        
        <ListGroupItem 
          className={`d-flex justify-content-between align-items-center ${openSections.section2 ? 'active' : ''}`} 
          onClick={() => toggle('section2')} 
          style={{ cursor: 'pointer' }}
        >
          How is Equitabl different from other HR Tech platforms in the market?
          {openSections.section2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </ListGroupItem>
        <Collapse isOpen={openSections.section2}>
          <ListGroupItem><b>Seamless HR and Finance Integration:</b> Many platforms focus on either HR or finance, but Equitabl integrates both, providing a holistic view and enabling smarter financial and workforce planning.</ListGroupItem>
          <ListGroupItem><b>Customization:</b> Equitabl offers custom dashboards and reports tailored to specific business needs, such as skills mapping, workforce planning, pay gap analysis, WGEA reporting, and payroll dashboards. This level of customization is not commonly found in other platforms.</ListGroupItem>
          <ListGroupItem><b>Intuitive Multi-Source Analysis:</b> The platform is designed for easy analysis of data from multiple sources, making it user-friendly and accessible for businesses without extensive data analytics expertise.</ListGroupItem>
          <ListGroupItem><b>Focus on SMBs in the APAC Region:</b> While many HR Tech platforms target large enterprises globally, Equitabl is specifically tailored for small and medium businesses in the APAC region, with SMB-friendly pricing and dedicated customer service.</ListGroupItem>
          <ListGroupItem><b>Personalized Insights:</b> The platform provides insights that are highly personalized to the unique needs of each organization, helping businesses make more informed decisions.</ListGroupItem>
          <ListGroupItem><b>SaaS Flexibility:</b> As a SaaS platform, Equitabl offers the flexibility, scalability, and ease of access that cloud-based solutions provide, without requiring significant in-house IT resources.</ListGroupItem>
          <ListGroupItem><b>Commitment to Custom Development:</b> If a specific API or feature is not available, Equitabl commits to developing custom solutions to meet the specific needs of their clients, showcasing a high level of adaptability and customer focus. These differentiators position Equitabl as THE solution for businesses in the APAC region.</ListGroupItem>
        </Collapse>
        
        <ListGroupItem 
          className={`d-flex justify-content-between align-items-center ${openSections.section3 ? 'active' : ''}`} 
          onClick={() => toggle('section3')} 
          style={{ cursor: 'pointer' }}
        >
          What type of a company does Equitabl work with?
          {openSections.section3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </ListGroupItem>
        <Collapse isOpen={openSections.section3}>
          <ListGroupItem><b>1. Size:</b> Small, medium-sized and enterprise businesses that need tailored and scalable solutions for their HR and financial planning needs.</ListGroupItem>
          <ListGroupItem><b>2. Industry:</b> Equitabl's services are industry-agnostic, making it suitable for a wide range of sectors, including technology, manufacturing, retail, healthcare, and more.</ListGroupItem>
          <ListGroupItem><b>3. Growth Stage:</b> Businesses in various stages of growth, particularly those looking to streamline operations, improve efficiency, and gain deeper insights into their workforce and financial data.</ListGroupItem>
          <ListGroupItem><b>4. Resource Constraints:</b> Companies that may lack extensive in-house IT and analytics resources and are looking for an intuitive, automated solution to manage their HR and financial data.</ListGroupItem>
          <ListGroupItem><b>5. Customization Needs:</b> Organizations that require customized dashboards, reports, and insights tailored to their specific business needs and objectives.</ListGroupItem>
          <ListGroupItem><b>6. Focus on Data-Driven Decisions:</b> Businesses that value data-driven decision-making and seek an integrated platform to provide comprehensive and actionable insights.</ListGroupItem>
          <ListGroupItem><b>7. Cost Sensitivity:</b> SMBs that are mindful of their budgets and appreciate competitive, SMB-friendly pricing structures.</ListGroupItem>
        </Collapse>
        
        <ListGroupItem 
          className={`d-flex justify-content-between align-items-center ${openSections.section4 ? 'active' : ''}`} 
          onClick={() => toggle('section4')} 
          style={{ cursor: 'pointer' }}
        >
          Is it difficult to set up the system? How long will implementation take?
          {openSections.section4 ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </ListGroupItem>
        <Collapse isOpen={openSections.section4}>
          <ListGroupItem>Equitabl’s APIs are designed for straightforward and efficient integration with your existing data sources / systems. This streamlined process takes about 4-6 weeks and ensures that your data migration and synchronisation are smooth and hassle-free.</ListGroupItem>
        </Collapse>
      </ListGroup>
    </Container>
  );
}

export default Faq;
