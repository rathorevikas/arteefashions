import React, { useState } from "react";
import "./MenuBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuOptions from "../menuOptions/MenuOptions";

const MenuBar = () => {
  const [showMenuOptions, setShowMenuOptions] = useState(false);

  const showMenuHandler = () => {
    setShowMenuOptions(!showMenuOptions);
  };

  return (
    <>
      <div className="menubar_container">
        <div className="menubar_menu" onClick={showMenuHandler}>
          <MenuIcon />
          <label>Menu</label>
        </div>
        <div className="menubar_omsairam">
          <label>Om Sai Ram </label>
        </div>
        <div className="menubar_contact">
          <label>Contact</label>
          <MailOutlineIcon />
        </div>
      </div>
      {showMenuOptions && <MenuOptions showMenuHandler={showMenuHandler} />}
    </>
  );
};

export default MenuBar;
