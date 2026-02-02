
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import KitchenRemodeling from './pages/KitchenRemodeling';
import BathroomRemodeling from './pages/BathroomRemodeling';
import AreasServed from './pages/AreasServed';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services/kitchen-remodeling" element={<KitchenRemodeling />} />
          <Route path="/services/bathroom-remodeling" element={<BathroomRemodeling />} />
          <Route path="/areas-served" element={<AreasServed />} />
          <Route path="/areas-served/:city" element={<AreasServed />} />
          <Route path="/project-gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
