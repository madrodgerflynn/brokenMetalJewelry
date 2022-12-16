import './App.css';
import Bio from "./components/bio/Bio";
// import particles from "../particlesjs-config.json"
// import Works from "./components/works/Works";
// import Contact from "./components/contact/Contact";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SideBar from './components/sideBar/SideBar';
import React from 'react';

function App() {
  return (
    <Router>

      <Routes>
        {/* <Route path="/reactFolio" element={<Bio />} /> */}
        <Route path="/" element={<Bio />} />
        <Route path="/Bio" element={<Bio />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        {/* <Route path="/Works" element={<Works />} /> */}
      </Routes>
      <SideBar />
    </Router>
  );
}

export default App;
