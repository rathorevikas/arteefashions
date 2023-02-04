import React from "react";
import "./ServiceFlipCard.css";

const ServiceFlipCard = ({ data }) => {
  const {
    heading = "",
    description = "",
    url = "",
    borderRadius = "35% 65% 58% 42% / 39% 55% 45% 61%",
  } = data;

  return (
    <div className="service_flip_container">
      <div className="flip-container">
        <div className="flipper" style={{ borderRadius: borderRadius }}>
          <div
            className="front"
            style={{
              backgroundImage: `${url} `,
              borderRadius: borderRadius,
            }}
          ></div>
          <div className="back" style={{ borderRadius: borderRadius }}>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="service_flip_heading">
        <h1>{heading}</h1>
      </div>
    </div>
  );
};

export default ServiceFlipCard;
