import React from 'react';
import '../App.css'; // Ensure this import is here to apply the styles


function Books() {
  return (
    <>
      <div className="books">
        <div className="images-text">
          <img src={process.env.PUBLIC_URL + '/img/Cover.jpg'} alt="cover of is that really how it is book" />
          <img src={process.env.PUBLIC_URL + '/img/extracthoe2.jpg'} alt="An extract from the book 'Is that really how it is'" />
          <img src={process.env.PUBLIC_URL + '/img/extracthoe1.jpg'} alt="An extract from the book 'Is that really how it is'" />
        </div>
          <div className="text">
              <p>Focusing on source criticism, the educational book "Is That Really How It Is?" teaches the importance of finding and evaluating the sources behind facts you might take for granted. The book provides examples from history, urban myths, animal care, and some alarming facts to illustrate how what we perceive as truth may actually be incorrect. 
                Students are encouraged to find the sources behind the facts in the book themselves and to investigate facts on their own as another assignment.</p>
                <p> Please send us an email at <a href="mailto:wmp@whitemonkeypublishing.com">wmp@whitemonkeypublishing.com</a> for a digital license quote for your school or school district. For an individual copy, the books are also available on Amazon: <a href="https://www.amazon.co.uk/dp/B0CST3VFS1">Is that really how it is? </a> </p>
          </div>
      </div>
      <div className='books2'>
          <div className="images-text2">
            <img src={process.env.PUBLIC_URL + '/img/Home1.jpg'} alt="Arbie & Fizzie book characters" />
            <img src={process.env.PUBLIC_URL + '/img/extractfizzie2.jpg'} alt="An extract from the book 'Arbie & Fizzie'" />
            <img src={process.env.PUBLIC_URL + '/img/extractfizzie1.jpg'} alt="An extract from the book 'Arbie & Fizzie'" />

          </div>
          <div className="text2">
              <p> "Arbie & Fizzie" is an educational book that teaches young students about friendship and accepting those who are different. In the book, the unlikely friendship between an armadillo with autism and a desert fox with ADHD will help young children better understand these conditions and the importance of friendship.</p>
              <p> Please send us an email at <a href="mailto:wmp@whitemonkeypublishing.com">wmp@whitemonkeypublishing.com</a> for a digital license quote for your school or school district. For an individual copy, the books are also available on Amazon: <a href="https://www.amazon.co.uk/dp/B0CSFX7VVM">Arbie & Fizzie</a> </p>
          </div>
        </div>
    </>
  );
}

export default Books;
