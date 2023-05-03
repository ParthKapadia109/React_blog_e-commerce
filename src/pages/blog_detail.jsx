/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./index.css";
import ProductImg from "../assets/images/detail_page_img.jpg";
import releted1 from "../assets/images/releted1.jpg";
import releted2 from "../assets/images/releted2.jpg";
import releted3 from "../assets/images/releted3.jpg";
import releted4 from "../assets/images/releted4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  faChevronDown,
  faCircleLeft,
  faPhone,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitterSquare,
  FaBehanceSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const BlogDetail = () => {
  return (
    <>
      <Header />
      <section className="blog_detail_main">
        <div className="row">
          <div className="col-lg-7">
            <div className="product_img">
              <img src={ProductImg} className="w-100" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="product_detail_info">
              <div className="back_bt">
                <Link to={"/"} className="btn">
                  <FontAwesomeIcon icon={faCircleLeft} /> Back
                </Link>
              </div>
              <div className="blog_detail_inr">
                <h2>Abstract</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                  reprehenderit id maxime eveniet labore dolorem minus, placeat
                  accusantium. Blanditiis reiciendis veritatis non quae sequi
                  adipisci ducimus impedit ex officiis quod.
                </p>
                <ul>
                  <li>List1</li>
                  <li>List2</li>
                  <li>List3</li>
                  <li>List4</li>
                </ul>
              </div>
              <div className="product_accordion">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Accordion Item #1{" "}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="icon"
                        />
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the first
                        item's accordion body.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Accordion Item #2{" "}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="icon"
                        />
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the second
                        item's accordion body. Let's imagine this being filled
                        with some actual content.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Accordion Item #3{" "}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="icon"
                        />
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third
                        item's accordion body. Nothing more exciting happening
                        here in terms of content, but just filling up the space
                        to make it look, at least at first glance, a bit more
                        representative of how this would look in a real-world
                        application.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Accordion Item #4{" "}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="icon"
                        />
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third
                        item's accordion body. Nothing more exciting happening
                        here in terms of content, but just filling up the space
                        to make it look, at least at first glance, a bit more
                        representative of how this would look in a real-world
                        application.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social_btn">
                <Link className="btn share_bt me-3" to="">
                  <FontAwesomeIcon className="icon" icon={faShareNodes} /> Share
                </Link>
                <Link className="btn contact_bt" to="">
                  <FontAwesomeIcon className="icon" icon={faPhone} /> Contact
                </Link>
              </div>
              <div className="social_media">
                <ul>
                  <li>
                    <Link to="#">
                      <FaFacebookSquare />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaTwitterSquare />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaBehanceSquare />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="releted_view">
        <div className="sec_title">
          <h2>Related items</h2>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="releted_box">
              <Link to="#">
                <div className="releted_img">
                  <img src={releted1} className="w-100" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="releted_box">
              <Link to="#">
                <div className="releted_img">
                  <img src={releted2} className="w-100" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="releted_box">
              <Link to="#">
                <div className="releted_img">
                  <img src={releted3} className="w-100" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="releted_box">
              <Link to="#">
                <div className="releted_img">
                  <img src={releted4} className="w-100" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default BlogDetail;
