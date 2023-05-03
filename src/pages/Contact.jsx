import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const Contact = () => {
    return (
        <>
            <Header />
            <div className='contact_main'>
                <div className='contact_title'>
                    <h4>Contact Us</h4>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='contact_form'>
                            <form action="https://formspree.io/f/xoqzrdzn" method="POST">
                                <div className="form-group">
                                    <label className='form-label'>Username</label>
                                    <input type='text' className="form-control" placeholder='username' name='username' required autoComplete='off' />
                                </div>
                                <div className="form-group">
                                    <label className='form-label'>Email</label>
                                    <input type='text' className="form-control" placeholder='email' name='email' required autoComplete='off' />
                                </div>
                                <div className="form-group">
                                    <label className='form-label'>Description</label>

                                    <textarea type='text' className="form-control" placeholder='enter your message' name='message' required autoComplete='off' />
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <button type="submit" className='btn btn-primary'>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact_map m-0'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7439.734478209988!2d72.7722096412496!3d21.197432271977455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dcca2307431%3A0xc20b68791b712e60!2sL.P.%20Savani%20Group%20of%20School!5e0!3m2!1sen!2sin!4v1683047431864!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer />
        </>
    )
}

export default Contact