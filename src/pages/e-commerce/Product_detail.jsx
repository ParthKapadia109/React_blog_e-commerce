/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import DetailImg from'../../assets/images/product_detail_img.jpg'
import Header from '../../components/layout/Header'
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/layout/Footer'

export const Product_detail = () => {

    const navigate = useNavigate()
    const [itemCount,setItemCount] = useState(1)

    const handleClickPlus = () =>{
        setItemCount(itemCount+1)
    }
    
    const handleClickMinus = () =>{
        setItemCount(itemCount-1)
    }

    const addCart = () =>{
        const user = localStorage.getItem('user')
        if (user) {
            navigate('/ecommerce/cart')
        } else {
            navigate('/login')
        }
    }
  return (
    <>
        <Header/>
        <div className='product_detail_main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='product_detail_img'>
                            <img src={DetailImg} className='w-100'/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='product_detail_info'>
                            <h2>Product Name</h2>
                            <ul>
                                <li><Link to='#' className='active'><FaStar /></Link></li>
                                <li><Link to='#' className='active'><FaStar /></Link></li>
                                <li><Link to='#' className='active'><FaStar /></Link></li>
                                <li><Link to='#'><FaStar /></Link></li>
                                <li><Link to='#'><FaStar /></Link></li>
                            </ul>
                            <div className='price_tag'>
                                <h3>₹ 6500</h3>
                                <span>₹ 8400</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className='row mt-3'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Size : </label>
                                        <select className='form-select'>
                                            <option>Small</option>
                                            <option>Medium</option>
                                            <option>Large</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Color : </label>
                                        <select className='form-select'>
                                            <option>Blue</option>
                                            <option>Red</option>
                                            <option>Orange</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='quantity'>
                                <button className='btn quantity_btn' onClick={handleClickMinus}><FaMinus/></button>
                                    <input className='form-control' type='number' value={itemCount}/>
                                <button className='btn quantity_btn' onClick={handleClickPlus}><FaPlus/></button>
                            </div>
                            <div className='cart_btn_group'>
                                <button className='btn btn-warning cart' onClick={addCart}>Add to Cart</button>
                                <button className='btn btn-dark buy'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
