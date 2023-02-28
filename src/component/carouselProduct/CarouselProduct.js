import React from "react";
import "./CarouselProduct.css";
import p1 from "../../assets/PNG/p1.jpg";
const CarouselProduct = (props) => {
  const { name } = props;
  return (
    <div className="carouselProduct_container">
      <div className="carouselProduct_innerContainer">
        {/* <h1 className="carouselProduct_heading">{name}</h1> */}
        <img
          alt="product"
          src={p1}
          style={{ width: "250px", height: "400px" }}
        />
      </div>
    </div>
  );
};

export default CarouselProduct;
