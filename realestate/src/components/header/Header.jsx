import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div>
      <section className="h-wraper">
        <div className=" flexCenter paddings innerWidth h-container">
          <img src="./logo.png" alt="" width={100} />
          <div className="flexCenter h-menu">
            <a href="">Residencie</a>
            <a href="">Our value</a>
            <a href="">Contact Us</a>
            <a href="">Get started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
