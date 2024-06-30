import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Alumni from './Components/Alumini';
import Trending from './Components/Trending';
import Seniors from './Components/Seniors';
import Contact from './Components/Contact';
import WebDevelopment from './Pages/WebDev'; 
import AppDevelopment from './Pages/AppDev';
import ProblemSolving from './Pages/Problem';
import Tech from './Pages/Undergraduate';
import Footer from './Components/Footer';
import Aiml from './Pages/Aiml';
import Blockchain from './Pages/Blockchain';
import Aptitude from './Pages/Aptitude';
import Entrepreneur from './Pages/Entrepreneur';

function App() {
  return (
    <BrowserRouter >
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/seniors" element={<Seniors />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/app-development" element={<AppDevelopment />} />
              <Route path="/problem-solving" element={<ProblemSolving />} />
              <Route path="/Aiml" element={<Aiml/>} />
              <Route path="/Blockchain" element={<Blockchain/>} />
              <Route path="/Aptitude" element={<Aptitude/>} />
              <Route path="/Entrepreneur" element={<Entrepreneur/>} />
              <Route path="/tech" element={<Tech />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
