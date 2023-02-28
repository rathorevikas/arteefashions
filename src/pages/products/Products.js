import React from "react";
import "./Products.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselProduct from "../../component/carouselProduct/CarouselProduct";

const Products = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div id="products" className="products_container">
      <div className="products_heading">
        <h1>Products</h1>
      </div>
      <div className="products_carousel">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <CarouselProduct name={"box1"} />
          <CarouselProduct name={"box2"} />
          <CarouselProduct name={"box3"} />
          <CarouselProduct name={"box4"} />
          <CarouselProduct name={"box5"} />
          <CarouselProduct name={"box6"} />
        </Carousel>
      </div>
    </div>
  );
};

export default Products;
