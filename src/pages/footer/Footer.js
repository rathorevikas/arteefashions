import React, { useContext } from "react";
import { ContextAPi } from "../../contextApi";
import "./Footer.css";

const Footer = () => {
  const { dispatchContactReducer } = useContext(ContextAPi);

  const showContactHandler = () => {
    dispatchContactReducer("SHOW_CONTACT");
  };

  return (
    <div className="footer_container">
      <div className="footer_heading">
        <h1>Artee Fashions</h1>
        <ul className="footer_list">
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Our Services</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#" onClick={showContactHandler}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="footer_copyright">
        <h4> &#169; 2023 Artee Fashions. All right reserved !</h4>
      </div>
    </div>
  );
};

export default Footer;
