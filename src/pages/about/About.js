import React from "react";
import "./About.css";
import FlagIcon from "@mui/icons-material/Flag";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarIcon from "@mui/icons-material/Star";
import aboutImage from "../../assets/PNG/aboutImage2.jpg"

const About = () => {
  return (
    <div id="about" className="about_container">
      <div className="about_header">
        <h1>About Us</h1>
      </div>
      <div className="about_content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          imperdiet blandit ligula non sodales. Sed semper iaculis scelerisque.
          Aenean blandit libero posuere mi euismod imperdiet. Donec molestie
          elit metus, eu egestas nunc consectetur a. Aliquam commodo ac risus in
          finibus. Integer ultrices lectus mattis, tincidunt mauris a, tristique
          sapien. Vivamus aliquet posuere elit, vitae fringilla risus commodo
          et. Phasellus sit amet tincidunt leo, et posuere lacus. Fusce vel
          massa lacinia, porta neque id, hendrerit nulla. Nulla non tempus erat.
          Donec in ligula tortor.
        </p>
      </div>
      <div className="about_image">
        <img src={aboutImage}/>
      </div>
      <div className="about_tables">
        <div className="about_mission">
          <div className="about_circle">
            <FlagIcon fontSize="large" sx={{ color: "#7a8d86" }} />
          </div>
          <h1>Mission</h1>
          <p className="about_table_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            imperdiet blandit ligula non sodales. Sed semper iaculis
            scelerisque. Aenean blandit libero posuere mi euismod imperdiet.
            Donec molestie elit metus, eu egestas nunc consectetur a.
          </p>
        </div>
        <div className="about_vision">
          <div className="about_circle">
            <VerifiedIcon fontSize="large" sx={{ color: "#7a8d86" }} />
          </div>
          <h1>Vision</h1>
          <p className="about_table_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            imperdiet blandit ligula non sodales. Sed semper iaculis
            scelerisque. Aenean blandit libero posuere mi euismod imperdiet.
            Donec molestie elit metus, eu egestas nunc consectetur a.
          </p>
        </div>
        <div className="about_values">
          <div className="about_circle">
            <StarIcon fontSize="large" sx={{ color: "#7a8d86" }} />
          </div>
          <h1>Values</h1>
          <p className="about_table_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            imperdiet blandit ligula non sodales. Sed semper iaculis
            scelerisque. Aenean blandit libero posuere mi euismod imperdiet.
            Donec molestie elit metus, eu egestas nunc consectetur a.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
