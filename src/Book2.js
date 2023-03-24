import React from "react";
import './index.css'
const Book2 = () => {
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
    src="https://m.media-amazon.com/images/I/51B7kuFwQFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt="Atomic Habits"
  />
);
const Title = () => <h2> Atomic Habits</h2>;
const Author = () => <h4>James Clear</h4>;

export default Book2;
