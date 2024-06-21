import React from 'react';
import './App.css';
import logo from './logo.jpg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Author from './pages/Author';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <link red="icon" href='/whitemonkeypublishing/public/favicon.ico' />
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <nav className="App-nav">
            <ul>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/author">Author</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav>
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
          White Monkey Publishing all rights reserved 2024. Contact  <a href= "mailto: wmp@whitemonkey.com"> wmp@whitemonkey.com </a> for license quotes for your school or district.
        </footer>
      </div>
    </Router>
  );
}

export default App;
