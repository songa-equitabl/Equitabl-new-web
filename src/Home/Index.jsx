import Blog from '../Blog/Blog.jsx';
import Footer from '../footer/Footer.jsx';
import Subscribe from '../subscribe/Subscribe.jsx';
import Header from './Header.jsx'
import MiddleSection1 from './MiddleSection1.jsx';
import MiddleSection2 from './MiddleSection2.jsx';
import Partners from './Partners.jsx';
const Home = ()=>{
    return(
        <div>
        <Header/>
        <MiddleSection1/>
        <MiddleSection2/>
        <Partners/>
        <Blog isHomePage={true}/>
        <Subscribe/>
        <Footer/>
      </div>
    );
  };

export default Home;