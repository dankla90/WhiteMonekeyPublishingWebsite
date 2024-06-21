import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="App-nav">
      <ul>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/author">Author</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
