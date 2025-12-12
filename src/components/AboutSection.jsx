import React from "react";
import "./Sections.css";

function AboutSection() {
  return (
    <section className="section-container">
      <h1 className="section-title">About Us</h1>

      <p className="section-text">
        Catalog Hub is a modern platform designed to help you explore items in
        the simplest and fastest way. Built using the MERN Stack.
      </p>

      <div className="about-box">
        <p>
          ✔ Fast Performance  
          ✔ Beautiful UI  
          ✔ Easy to Use  
          ✔ Built for Everyone
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
