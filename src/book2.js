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
    src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL900_SR900,600_.jpg"
    alt="Atomic Habits"/>
);
const Title = () => <h2> Atomic Habits</h2>;
const Author = () => <h4>James Clear</h4>;

export default Book2;
