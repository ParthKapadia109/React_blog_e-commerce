/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BsFillMouseFill } from "react-icons/bs";
import "./index.css";
import { Container } from "react-bootstrap";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Link } from "react-router-dom";

const products = [
  {
    name: "White shirt",
    price: "2000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOHtmDqUBkhiRq30X3cfI9WXk1ZTgosjwFw&usqp=CAU",
    size: "XL",
  },
  {
    name: "White shirt",
    price: "2000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOHtmDqUBkhiRq30X3cfI9WXk1ZTgosjwFw&usqp=CAU",
    size: "XL",
  },
  {
    name: "White shirt",
    price: "2000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOHtmDqUBkhiRq30X3cfI9WXk1ZTgosjwFw&usqp=CAU",
    size: "XL",
  },
  {
    name: "White shirt",
    price: "2000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOHtmDqUBkhiRq30X3cfI9WXk1ZTgosjwFw&usqp=CAU",
    size: "XL",
  },
  {
    name: "White shirt",
    price: "2000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOHtmDqUBkhiRq30X3cfI9WXk1ZTgosjwFw&usqp=CAU",
    size: "XL",
  },
  {
    name: "White shirt",
    price: "2000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOHtmDqUBkhiRq30X3cfI9WXk1ZTgosjwFw&usqp=CAU",
    size: "XL",
  },
  {
    name: "White shirt",
    price: "2000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOHtmDqUBkhiRq30X3cfI9WXk1ZTgosjwFw&usqp=CAU",
    size: "XL",
  },
  {
    name: "White shirt",
    price: "2000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOHtmDqUBkhiRq30X3cfI9WXk1ZTgosjwFw&usqp=CAU",
    size: "XL",
  },
];

const collection = [
  {
    name: "Men's Wear",
    img: "https://media.istockphoto.com/id/1396160859/photo/baby-and-child-clothes-toys-in-box-second-hand-apparel-idea-circular-fashion-donation-charity.jpg?b=1&s=170667a&w=0&k=20&c=S5EA0TWjsGw1d-6BY3e5blMP1W5TP8uBxCeKD9nEzE4=",
  },
  {
    name: "WoMen's Wear",
    img: "https://media.istockphoto.com/id/1415539642/photo/vertical-shot-of-a-stack-of-folded-clothes.jpg?b=1&s=170667a&w=0&k=20&c=Xsjae-AWRltveHYRLvHviypNpE8PQH6oBhr5kwEQDeY=",
  },
  {
    name: "Foot-Wear",
    img: "https://media.istockphoto.com/id/1404603483/photo/female-autumn-clothes-on-hangers-in-white-room.jpg?b=1&s=170667a&w=0&k=20&c=H5oDGZDgKtTieO4OwU_HZlGMjtt--RuiHdxCswZOKvU=",
  },
  {
    name: "Foot-Wear",
    img: "https://media.istockphoto.com/id/1339264709/photo/flat-lay-with-womans-clothes-and-accessories.jpg?b=1&s=170667a&w=0&k=20&c=QmBv2i2J2uLi6lVxMf3EcZ3iiyg_aygJ_elCuTptGz0=",
  },
];

const Home = () => {
  return (
    <>
      <Header />

      <div className="banner">
        <div className="scroll-btn">
          <p>All Products divided in multiple categories...</p>
          <a href="#features">
            <button type="button" className="btn btn-outline-dark p-3">
              <BsFillMouseFill size={25} color={"#000"} />
            </button>
          </a>
        </div>
      </div>

      {/* features */}
      <div className="sec_main">
        <div className="sec_title text-center pb-5">
          <h4>Features</h4>
        </div>
        <div id="features">
          <Container>
            <div className="row">
              {products.map((data, id) => {
                return (
                  <div className="col-md-3">
                    <Link
                      to="/ecommerce/product_detail"
                      className="text-decoration-none text-dark"
                    >
                      <div className="product_box">
                        <div className="product_img">
                          <img src={data.img} className="w-100" />
                        </div>
                        <div className="product_detail">
                          <h2>{data.name}</h2>
                          <label>₹ {data.price}</label>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      </div>

      {/* collections */}
      <div className="sec_main">
        <div className="sec_title text-center pb-5">
          <h4>Collections</h4>
        </div>
        <div id="collection">
          <Container>
            <div className="row">
            {collection.map((data, id) => {
                return (
                  <div className="col-md-3">
                    <Link
                      to="/ecommerce/product_detail"
                      className="text-decoration-none text-dark"
                    >
                      <div className="product_box">
                        <div className="product_img">
                          <img src={data.img} className="w-100" />
                        </div>
                        <div className="product_detail">
                          <h2>{data.name}</h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
