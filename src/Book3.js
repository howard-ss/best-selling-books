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
    src="https://images-na.ssl-images-amazon.com/images/I/81a4bSDHqUL._AC_UL900_SR900,600_.jpg"
    alt="Daisy Jones & The Six"
  />
);
const Title = () => <h2> Daisy Jones & The Six</h2>;
const Author = () => <h4>Taylor Jenkins Reid</h4>;

export default Book3;
