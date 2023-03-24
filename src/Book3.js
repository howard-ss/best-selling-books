import React from "react";
import './index.css'
const Book3 = () => {
  return (
    <div className="book">
      <Image />
      <Title />
      <Author />
    </div>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/515N5xQGsAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt="Daisy Jones & The Six"
  />
);
const Title = () => <h2> Daisy Jones & The Six</h2>;
const Author = () => <h4>Taylor Jenkins Reid</h4>;

export default Book3;
