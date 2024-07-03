import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom';
import './App.css';
import logo from './logo.png';
import Home from './pages/Home'; // Adjust import paths as per your project structure
import Books from './pages/Books';
import Author from './pages/Author';
import About from './pages/About';
import Navigation from './components/Navigation';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/books" element={<Books />} />
            <Route path="/author" element={<Author />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer className="App-footer">
          White Monkey  Publishing is a subdivision of Klausen Blog-info Enterprises. Registered in Norway, organization number: 925789704. 
           All rights reserved 2024. Contact  <a href="mailto:wmp@whitemonkeypublishing.com"> wmp@whitemonkeypublishing.com</a>           for a license quote for your school or district. 
        </footer>
      </div>
  );
}

export default App;
