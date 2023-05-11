import React, { useContext, useState } from "react";
import "./MenuBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuOptions from "../menuOptions/MenuOptions";
import { ContextAPi } from "../../contextApi";

const MenuBar = () => {
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const { showContact, dispatchContactReducer } = useContext(ContextAPi);

  const showMenuHandler = () => {
    setShowMenuOptions(!showMenuOptions);
  };

  const showContactHandler = () =>{
    console.log(showContact)
    dispatchContactReducer("SHOW_CONTACT")
  }

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
        <div className="menubar_contact" onClick={showContactHandler}>
          <label>Contact</label>
          <MailOutlineIcon />
        </div>
        {showMenuOptions && <MenuOptions showMenuHandler={showMenuHandler} />}
      </div>

    </>
  );
};

export default MenuBar;
