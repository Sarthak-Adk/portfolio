import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
// import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Index from './Pages/Index';
import Footer from './Component/Footer'
import Contact from './Pages/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 md:px-[140px] py-10 transition-colors duration-500">
      <BrowserRouter>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
