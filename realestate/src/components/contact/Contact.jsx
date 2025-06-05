import React from "react";
import "./contact.css";
import { MdCall } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs"; // Bootstrap icon
import { HiChatBubbleBottomCenter } from "react-icons/hi2"; // Heroicons 2

export default function Contact() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className=" flexColStart c-left">
          <span className="orangeText">Our contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            Our customer care service is always available any time any day.
          </span>

          <div className="flexColStart contactModes">
            {/* firstrow */}
            <div className="flexStart row">
              {/* call mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+2547970006700</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* chat mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+2547890005600</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* second row */}
            {/* video call mode */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText"> Video Call</span>
                    <span className="secondaryText">+2547970006700</span>
                  </div>
                </div>
                <div className="flexCenter button"> video Call Now</div>
              </div>
              {/* message mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">+2547890005600</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="hero 4.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
