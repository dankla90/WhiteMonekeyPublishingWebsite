import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure this import is here to apply the styles

function Home() {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/books');
  };

  return (
    <div className="home">
      <div className="text">
        <h1>Welcome</h1>
        <p>
           Acquire these brand-new educational books for your school to help your students better understand the importance of friendship and acceptance, and to become more critical of sources of information. 
        </p>
        <p>
           Read more about the books and inquire to obtain a quote for a digital license for your school or entire school district.
        </p>
      </div>

      <div className="images">
        <img 
          src={process.env.PUBLIC_URL + '/img/Home1.jpg'} 
          alt="Arbie & Fizzie book characters" 
          onClick={handleImageClick} 
          style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate it's clickable
        />

        <img 
          src={process.env.PUBLIC_URL + '/img/Cover.jpg'} 
          alt="cover of is that really how it is book" 
          onClick={handleImageClick} 
          style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate it's clickable
        />
      </div>
    </div>
  );
}

export default Home;
