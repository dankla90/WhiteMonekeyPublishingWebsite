import React from 'react';
import styles from '../App.css'; // Import CSS module

function About() {
  return (
    <div className="about">
      <div className="about-text">
        <h1 className='about-title'>About White Monkey Publishing</h1>
        <p>
        This newly established publishing house focuses on educational books for young learners. The first two books from White Monkey teach children about friendship and source criticism.
        </p>
        <p>
        The author of the books has decades of experience working in the education sector and pedagogical education, in addition to a Bachelor of Visual Communication and Design.
        </p>
      </div>
      <img
        className={styles['about-image']}
        src={process.env.PUBLIC_URL + '/img/Back_Ill 1.png'}
        alt="Four small characters from the books"
      />
    </div>
  );
}

export default About;
