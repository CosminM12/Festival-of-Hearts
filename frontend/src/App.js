import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Schedule from './pages/Schedule/Schedule';
import Lineup from './pages/Lineup/Lineup';
import Archive from './pages/Archive/Archive';
import Multimedia from './pages/Multimedia/Multimedia';
import Apply from './pages/Apply/Apply';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/despre" element={<About />} />
            <Route path="/program" element={<Schedule />} />
            <Route path="/ansambluri" element={<Lineup />} />
            <Route path="/editii-anterioare" element={<Archive />} />
            <Route path="/multimedia" element={<Multimedia />} />
            <Route path="/inscriere" element={<Apply />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
