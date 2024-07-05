import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Index';
import About from './About/Index';
import Resource from './Resource/Index';
import Pricing from './Pricing/Index';
import CustomNavbar from './navbar/CustomNavbar';
import BlogDetails from './Blog/BlogDetails';
import './App.css';
import Blog from './Blog/Blog';

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resource" element={<Resource />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/About" element={<About />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
