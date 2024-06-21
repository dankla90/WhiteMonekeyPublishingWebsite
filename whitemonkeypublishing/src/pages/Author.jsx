import React from 'react';
import '../App.css'; // Ensure this import is here to apply the styles

function Author() {
  return (
    <div className="author">
      <div className="images">
        <img src={process.env.PUBLIC_URL + '/img/IMG_7511.jpg'} alt="Johnny B. Clausen" />
      </div>
      <div className="text">
        <h1>Author</h1>
        <p>
        Johnny B. Clausen is a comic creator, illustrator, and graphic designer with a long history working within the education system. In 2011, he studied pedagogy in Bergen and went on to work in Norwegian public schools as both a PA and substitute teacher for the next 3 years.
        </p>
        <p>
        In 2014, Johnny became a certified TEFL teacher and taught English to both children and adults in Spain. With years of experience working with children with learning disabilities, he drew inspiration from that as he began writing and illustrating educational children's books in 2020.
        </p>
      </div>
    </div>
  );
}

export default Author;
