import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);

    const loggeduser = JSON.parse(localStorage.getItem("user"))
    console.log(loggeduser === null);

    if (loginData.email === loggeduser?.email && loginData.password === loggeduser?.password) {
      navigate("/ecommerce/home")
    }else if(loggeduser === null) {
      alert("Need to first register...")
      navigate("/register")
    }else {
      alert("Wrong credentials!")
    }
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
                  <h3>Welcome back!</h3>
                  <p>
                    Login with your email address and password to keep connected
                    with us.
                  </p>
                </div>
                <form
                  className="sign_in_form"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="form-group mt-3">
                    <label className="form-label">Email : </label>
                    <input
                      className="form-control form-control-lg box-rounded"
                      name="email"
                      onChange={(e) => handleChange(e)}
                      type="email"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="form-label">Password : </label>
                    <input
                      className="form-control form-control-lg box-rounded"
                      name="password"
                      onChange={(e) => handleChange(e)}
                      type="password"
                      required=""
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <div className="d-flex align-itmes-center justify-content-between">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck"
                        />
                        <label className="form-check-label" for="formCheck">
                          Remember me
                        </label>
                      </div>
                      <Link to="/forgot_password">Forgot your password?</Link>
                    </div>
                  </div>
                  <div className="form_btn mt-4">
                    <button
                      className="btn sign_bt me-4"
                      type="submit"
                    >
                      Sign in
                    </button>
                    <Link className="btn sign_up_bt" to="/register">
                      Sign up
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
export default Login
