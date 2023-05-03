import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_contact">
          <div className="contact_inr">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="contact_title">
                  <h2>
                    Let`s get in touch and create beautiful things together
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact_bt text-end">
                  <Link to="#" className="btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_link">
          <ul>
            <li>
              <Link to="#">Experience</Link>
            </li>
            <li>
              <Link to="#">Cookies</Link>
            </li>
            <li>
              <Link to="#">Privacy policy</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Licenses</Link>
            </li>
          </ul>
        </div>
        <div className="footer_copyright">
          <p>copyright © Hardik - Theme by Hardik Patel</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
