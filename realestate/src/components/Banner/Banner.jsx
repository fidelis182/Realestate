import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <section className="b-wrapper">
      <div className="paddings innerWidth b-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started</span>
          <span className="secondaryText">
            Subscribe and get notification of new homes and their prices <br />
            Find yourself a home{" "}
          </span>
          <button className="button">
            <a href="mailto:fidie@gmail.com"> Get started</a>
          </button>
        </div>
      </div>
    </section>
  );
}
