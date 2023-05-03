import React from "react";
import { Link } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const Error = () => {
  return (
    <div>
      <Header />
      <div className="container text-center my-3">
        <h2>404</h2>
        <h2>Page is not available</h2>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <Link type="button" className="btn btn-primary" to="/">
          Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
