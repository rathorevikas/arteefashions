import React from "react";
import ServiceFlipCard from "../../component/serviceFlipCard/ServiceFlipCard";
import "./Services.css";
import stitching from "../../assets/PNG/stitching.jpg";

const Services = () => {
  const Service_Data = [
    {
      heading: "Stitching",
      description:
        "we have 20+ expert workers for Stitching.Those are professional and creative with there skills. ",
      url: `url(${stitching})`,
      borderRadius: "35% 65% 58% 42% / 39% 55% 45% 61%",
    },
    {
      heading: "Cutting",
      description:
        "we have 20+ expert workers for Stitching.Those are professional and creative with there skills. ",
      url: "url(https://picsum.photos/500/500)",
      borderRadius: "50% 50% 74% 26% / 72% 52% 48% 28%",
    },
    {
      heading: "Designing",
      description:
        "we have 20+ expert workers for Stitching.Those are professional and creative with there skills. ",
      url: "url(https://picsum.photos/500/500)",
      borderRadius: "71% 29% 65% 35% / 43% 31% 69% 57%"
    },
    {
      heading: "Packaging",
      description:
        "we have 20+ expert workers for Stitching.Those are professional and creative with there skills. ",
      url: "url(https://picsum.photos/500/500)",
      borderRadius: "17% 83% 41% 59% / 49% 37% 63% 51%",
    },
  ];

  return (
    <div id="services" className="services_container">
      <div className="services_header">
        <h1>Our Services</h1>
      </div>
      <div className="services_content">
        <div className="services_gridTable">
          {Service_Data?.map((item) => (
            <div key={item.heading}>
              <ServiceFlipCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
