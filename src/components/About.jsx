// About.jsx
import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p> Dine in Elegance, Book with Ease</p>
            </div>
            <p className="mid">
              At Kushina, dining is a celebration. We offer a warm atmosphere
              and exquisite cuisine, perfect for any occasion. Our seamless
              reservation system makes booking your table easy, ensuring a
              memorable dining experience every time. Join us to enjoy flavorful
              dishes and create lasting memories. We look forward to serving
              you!
            </p>
            <Link to="menu" spy={true} smooth={true} duration={500}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about2.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
