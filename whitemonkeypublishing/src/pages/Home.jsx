import React from 'react';
import '../App.css'; // Ensure this import is here to apply the styles

function Home() {
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
        <img src={process.env.PUBLIC_URL + '/img/Home1.jpg'} alt="Arbie & Fizzie book characters" />

        <img src={process.env.PUBLIC_URL + '/img/Cover.jpg'} alt="cover of is that really how it is book" />
      </div>
    </div>
  );
}

export default Home;
