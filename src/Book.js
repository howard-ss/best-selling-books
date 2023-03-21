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
    <img src='https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL900_SR900,600_.jpg'
         alt='Dog Man' />
);
const Title = () => (
     <h2> Dog Man</h2>
);
const Author = () => (
     <h4>Dav Pilkey</h4>
    )
   

export default Book
