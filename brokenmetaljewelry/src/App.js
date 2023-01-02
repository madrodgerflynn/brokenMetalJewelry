import './App.css';
import Bio from "./components/bio/Bio";
import Particles from "react-particles"
// import Works from "./components/works/Works";
// import Contact from "./components/contact/Contact";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SideBar from './components/sideBar/SideBar';
import React, { useCallback } from 'react';
import {loadFull} from "tsparticles";
import particleOptions from "./particlesjs-config.json";
import Footer from "./components/footer/Footer";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
    
  },[]);
  return (
    <Router>
      
      <Particles options={particleOptions} init={particlesInit} />
      <Routes>
        {/* <Route path="/reactFolio" element={<Bio />} /> */}
        <Route path="/" element={<Bio />} />
        <Route path="/Bio" element={<Bio />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        {/* <Route path="/Works" element={<Works />} /> */}
      </Routes>
      <SideBar />
      <Footer/>
    </Router>
  );
}

export default App;
