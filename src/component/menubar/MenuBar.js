import React from "react";
import "./MenuBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const MenuBar = () => {
  return (
    <>
      <div className="menubar_container">
        <div className="menubar_menu">
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
    </>
  );
};

export default MenuBar;
