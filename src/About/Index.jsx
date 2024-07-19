import Team from "./Team";
import Faq from "../FAQ/Faq";
import Blog from "../Blog/Blog";
import Footer from "../footer/Footer";
import Subscribe from "../subscribe/Subscribe";
const About =()=>{
    return (
        <div>
           <Team/>
           <Faq/>
           <Blog isHomePage={true}/>
           <Subscribe/>
           <Footer/>
        </div>
    );
};
 export default About;