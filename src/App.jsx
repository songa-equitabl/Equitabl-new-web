import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home/Index';
import About from './About/Index';
import Resource from './Resource/Index';
import Pricing from './Pricing/Index';
import CustomNavbar from './navbar/CustomNavbar';
import BlogDetails from './Blog/BlogDetails';
import './App.css';
import Blog from './Blog/Blog';
import PrivacyPolicy from './Privacy/PrivacyPolicy';
import Form from './Form/Form';

const App = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/privacy-policy'];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <CustomNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resource" element={<Resource />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/About" element={<About />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
