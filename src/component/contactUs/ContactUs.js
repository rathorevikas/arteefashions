import { Modal } from "@mui/material";
import React, { useContext, useState } from "react";
import { ContextAPi } from "../../contextApi";
import "./ContactUs.css";
const ContactUs = () => {
  const { showContact, dispatchContactReducer } = useContext(ContextAPi);

  const handleClose = () => {
    dispatchContactReducer("HIDE_CONTACT");
  };

  return (
    <Modal
      open={showContact}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="contact_container">
        <div className="details">
          <h1>Feel free to reach out !</h1>
          <div>
            <strong>Hargovind Rathore</strong>
            <br></br>
            <a href="tel:+91 9810486920">+91 9810486920</a>
          </div>
          <div style={{ marginTop: "15px" }}>
            <strong>Anuj Rathore</strong>
            <br></br>
            <a href="tel:+91 8882146727">+91 8882146727</a>
          </div>
          <div style={{ marginTop: "15px" }}>
            <strong>Address :</strong>
            <br></br>
            <span>D-92 Sector 7, Noida, Uttar Pradesh - 201301 </span>
          </div>
        </div>
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.097230736682!2d77.31511607621617!3d28.596859785698452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f1b686e5c7%3A0x1f92115e00411b67!2s92%2C%20Block%20D%2C%20Sector%207%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1683822943377!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 1 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Modal>
  );
};

export default ContactUs;
