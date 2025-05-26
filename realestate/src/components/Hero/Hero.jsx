import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Discover <br /> Most Avodable <br /> Property
            </h1>
            <div className=" flexColStart hero-description">
              <span className="secondaryText">
                Find a variety of properties that are pockte friendly
              </span>
              <span className="secondaryText">
                Don`t strugle in finding a residence{" "}
              </span>
            </div>
            <div className=" flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">search</button>
            </div>
          </div>
          <div className="flexCenter statistics">
            <div className="flexColCenter stats">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stats">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stats">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Get your reward</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
