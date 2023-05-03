import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import "./index.css";

const Cart = () => {
  return (
    <>
      <Header />
      <section className="cart_main">
        <div className="cart_title">
          <h2>Cart</h2>
        </div>
        <div className="cart_info">
          <div className="row">
            <aside className="col-md-8">
              <div className="card_box">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <img
                        src="https://media.istockphoto.com/id/1396160859/photo/baby-and-child-clothes-toys-in-box-second-hand-apparel-idea-circular-fashion-donation-charity.jpg?b=1&s=170667a&w=0&k=20&c=S5EA0TWjsGw1d-6BY3e5blMP1W5TP8uBxCeKD9nEzE4="
                        alt="product_img"
                        height="150px"
                        width="100%"
                      />
                    </div>

                    <div className="col-md-5">
                      <div className="cart_product_info">
                        <h4>Warm clothes</h4>
                        <p>some description .....</p>
                        <span class="badge badge-pill badge-info">₹ 2500</span>
                      </div>
                    </div>

                    <div className="col-md-3 ">
                      <div className="quantity_increment">
                        <button type="button" className="btn btn-light">
                          <FaMinus />
                        </button>
                        <input value='5' type="number" className="form-control"/>
                        <button type="button" className="btn btn-light">
                          <FaPlus />
                        </button>
                      </div>
                    </div>

                    <div className="col-md-1">
                      <div className="delete_icon">
                        <FaTrash className="icon" type="button" />
                      </div>
                    </div>
                  </div>
              </div>
            </aside>

            <aside className="col-md-4">
              <div className="card mb-2">
                <div className="card-body">
                  <div>
                    <h6 className="fs-4 fw-bold">Payment Method</h6>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="a"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <table className="table table-borderless">
                      <thead></thead>
                      <tbody className="tableBody">
                        <tr>
                          <td>Price :</td>
                          <td>2500</td>
                        </tr>
                        {/* <tr>
                          <td>GST (18%) :</td>
                          <td></td>
                        </tr> */}
                        <tr className="total">
                          <td>Total :</td>
                          <td><strong>₹52000</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
