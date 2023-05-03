import React from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'

const Header = (props) => {
    const navigate = useNavigate()
    
    const logout = () => {
        localStorage.removeItem("user");
        navigate('/ecommerce/home')
    }
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg bg-light">
                <Link className="navbar-brand" to="/">Logo Here</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/project">Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        {
                            localStorage.getItem('user') ? (
                                <li className="nav-item">
                                    <button className="nav-link" onClick={logout}>Logout</button>
                                </li>) : (

                                <li className="nav-item">
                                    <Link className="nav-link" to="/ecommerce/home">Shop</Link>
                                </li>
                            )

                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header