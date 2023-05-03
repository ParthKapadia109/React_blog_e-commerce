import React from 'react'
import Logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'

export const ForgotPassword = () => {
    return (
        <>
            <section className="auth_main">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-5'>
                            <div className='auth_box '>
                                <div className='auth_box_title text-center mb-3'>
                                    <img className="logo-image" alt="Logo" src={Logo} width={100} />
                                    <h3>Reset Password</h3>
                                    <p>Fill out your email address, and we’ll send you instructions to reset your password.</p>
                                </div>
                                <form className='sign_in_form'>
                                    <div className="form-group mt-3">
                                        <label className='form-label'>Email : </label>
                                        <input className="form-control" type="email" placeholder="Email" required="" />
                                    </div>
                                    <div className="form_btn mt-4">
                                        <Link className="btn sign_bt me-4" to="#">Send</Link>
                                        <Link className="btn sign_up_bt" to="/login">Sign in</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ForgotPassword