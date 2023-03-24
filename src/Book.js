import React from 'react'
import './index.css'

const Book = () => {
  return (
    <div className='book'>
          <Image />
          <Title />
          <Author />
        </div>
    );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/51VyW1qRmSL._SX329_BO1,204,203,200_.jpg"
    alt="Dog Man"
  />
);
const Title = () => (
     <h2> Dog Man</h2>
);
const Author = () => (
     <h4>Dav Pilkey</h4>
    )
   

export default Book
