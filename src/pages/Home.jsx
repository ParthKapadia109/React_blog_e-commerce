/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./index.css";
import Img1 from "../assets/images/img_1.jpeg";
import Img2 from "../assets/images/img_2.jpeg";
import Img3 from "../assets/images/img_3.jpeg";
import Img4 from "../assets/images/img_4.jpeg";
import Img5 from "../assets/images/img_5.jpeg";
import Img6 from "../assets/images/img_6.jpeg";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <section className="info_sec">
        <div className="info_title">
          <h3>Simple and clean</h3>
          <h2>Minimalistic portfolio to showcase your work</h2>
        </div>
      </section>
      <section className="blog_main">
        <div className="blog_inr">
          <div className="blog_box">
            <Link to={"blog_detail"}>
              <div className="blog_img">
                <img src={Img1} />
              </div>
              <div className="blog_info">
                <h3>NoteBook</h3>
                <p>GRAPHIC DESIGN</p>
              </div>
            </Link>
          </div>
          <div className="blog_box">
            <Link to={"blog_detail"}>
              <div className="blog_img">
                <img src={Img2} />
              </div>
              <div className="blog_info">
                <h3>Abstract</h3>
                <p>Art</p>
              </div>
            </Link>
          </div>
          <div className="blog_box">
            <Link to={"blog_detail"}>
              <div className="blog_img">
                <img src={Img3} />
              </div>
              <div className="blog_info">
                <h3>Central offices</h3>
                <p>Offices</p>
              </div>
            </Link>
          </div>
          <div className="blog_box">
            <Link to={"blog_detail"}>
              <div className="blog_img">
                <img src={Img4} />
              </div>
              <div className="blog_info">
                <h3>Square feet</h3>
                <p>Offices</p>
              </div>
            </Link>
          </div>
          <div className="blog_box">
            <Link to={"blog_detail"}>
              <div className="blog_img">
                <img src={Img5} />
              </div>
              <div className="blog_info">
                <h3>Dining dishes</h3>
                <p>Hard press</p>
              </div>
            </Link>
          </div>
          <div className="blog_box">
            <Link to={"blog_detail"}>
              <div className="blog_img">
                <img src={Img6} />
              </div>
              <div className="blog_info">
                <h3>Abstract</h3>
                <p>Offices</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="view_more_bt text-center">
          <Link to="#" className="btn">
            View all Projects
          </Link>
        </div>
      </section>
      <section className="client_sec">
        <div className="sec_title">
          <h2>Our amazing clients we love to work with</h2>
          <p>Ut et nisi ac dui pulvinar consequat. Curabitur</p>
        </div>
        <div className="client_info"></div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
