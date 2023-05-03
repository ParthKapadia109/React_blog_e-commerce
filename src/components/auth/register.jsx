import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(registerData))
    navigate("/login")
  };

  return (
    <>
      <section className="auth_main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="auth_box ">
                <div className="auth_box_title text-center mb-3">
                  <img
                    className="logo-image"
                    alt="Logo"
                    src={Logo}
                    width={100}
                  />
                  <h3>Hello, Friend!</h3>
                  <p>Create an account to start journey with us.</p>
                </div>
                <form
                  className="sign_in_form"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="form-group mt-3">
                    <label className="form-label">Name : </label>
                    <input
                      className="form-control"
                      name="name"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="form-label">Email : </label>
                    <input
                      className="form-control"
                      name="email"
                      onChange={(e) => handleChange(e)}
                      type="email"
                      placeholder="Email"
                      required=""
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label className="form-label">Phone No : </label>
                    <input
                      className="form-control"
                      name="phone"
                      onChange={(e) => handleChange(e)}
                      type="number"
                      placeholder="Phone"
                      required=""
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="form-label">Password : </label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      onChange={(e) => handleChange(e)}
                      required=""
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label className="form-label">Address : </label>
                    <textarea
                      className="form-control"
                      name="address"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      placeholder="address"
                      required=""
                    />
                  </div>
                  <div className="form_btn mt-4">
                    <button className="btn sign_bt me-4" type="submit">
                      Sign up
                    </button>
                    <Link className="btn sign_up_bt" to="/login">
                      Sign in
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
