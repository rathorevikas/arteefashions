import React from "react";
import "./Header.css";
import bigLogo from "../../assets/PNG/Artboard 3.png";
import smallLogo from "../../assets/PNG/Artboard 2.png";
import banner from "../../assets/PNG/banner.png";
import MenuBar from "../../component/menubar/MenuBar";

const Header = () => {
  return (
    <header id="header" className="header_container">
      <div className="header_menubar">
        <MenuBar />
      </div>
      <div className="header_logo">
        <img className="header_bigLogo" src={bigLogo} alt="logo" />
        <img className="header_smallLogo" src={smallLogo} alt="logo" />
      </div>
      <div className="header_subtitle">
        <h3>Manufacturer & Supplier of : Readymade & Export Garments</h3>
      </div>
      <div className="header_banner">
        <figure>
          <img className="banner_image" src={banner} />
        </figure>
        <figcaption className="banner_caption">
          "Fashion is like eating, you shouldn't stick to the same menu."
          <strong>—Kenzo Takada</strong>
        </figcaption>
      </div>
    </header>
  );
};

export default Header;
