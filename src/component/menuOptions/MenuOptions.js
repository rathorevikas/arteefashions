import React, { useContext } from "react";
import { ContextAPi } from "../../contextApi";
import "./MenuOptions.css";

const MenuOptions = ({ showMenuHandler }) => {
  const { dispatchContactReducer } = useContext(ContextAPi);
  const clickHandler = () => {
    showMenuHandler();
  };
  
  const showContactHandler = () => {
    dispatchContactReducer("SHOW_CONTACT");
  };

  return (
    <div className="menuOption_container" onBlur={clickHandler}>
      <div className="menuOption_Item">
        <a href="#about" onClick={clickHandler}>
          About Us
        </a>
      </div>
      <div className="menuOption_Item">
        <a href="#services" onClick={clickHandler}>
          Our Services
        </a>
      </div>
      <div className="menuOption_Item">
        <a href="#products" onClick={clickHandler}>
          Products
        </a>
      </div>
      <div className="menuOption_Item">
        <a href="#" onClick={showContactHandler}>
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default MenuOptions;
