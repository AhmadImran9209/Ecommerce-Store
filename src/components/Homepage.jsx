import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import header from '../assets/header.webp'
import e1 from '../assets/event1.webp'
import e2 from '../assets/event2.webp'
import e3 from '../assets/event3.webp'
import f1 from '../assets/Featured1.webp'
import f2 from '../assets/Featured2.webp'
import f3 from '../assets/Featured3.webp'
import f4 from '../assets/Featured4.webp'
import e11 from '../assets/event11.png'
import e22 from '../assets/event22.png'
import e33 from '../assets/event33.png'
import feature from '../src/assets/feature.webp'

const Homepage = () => {
    return (
        <>
            <Navbar />

            <div className='container mt-5'>
                <div className='row align-items-center'>
                    <div className='col-12 col-md-6 order-2 order-md-1 text-center text-md-start'>
                        <span className='sale70'><b>Sale 70%</b></span>
                        <h1 id='head1' className="mt-4">An Industrial take <br />on streetwear</h1>
                        <p id='hp' className='mt-4'>Anyone can beat you but no one can beat your <br />outfit as long as you wear Dine outfits.</p>
                        <Link to={"/Allproducts"}><button id='sh-btn' type="button" className="btn btn-dark mt-3">🛒 Start Shopping</button></Link>
                        <div className="header-featured d-flex justify-content-center justify-content-md-start mt-5">
                            <img src={f1} alt="" />
                            <img src={f2} alt="" />
                            <img src={f3} alt="" />
                            <img src={f4} alt="" />
                        </div>
                    </div>
                    <div className='col-12 col-md-6 order-1 order-md-2 text-center'>
                        <img className='img-fluid rounded-circle shadow-3-strong' src={header} alt="..." />
                    </div>
                </div>
            </div>

            <div>
                <h3 id='bh' className='text-center text-primary mt-5'>PROMOTIONS</h3>
                <h1 className='text-center'>Our Promotions Events</h1>

                <div id='con1' className="container my-4">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-4 mb-md-0">
                            <div id='event1' className="p-3 text-center text-md-start">
                                <h3>GET UPTO
                                    <span> 60%</span>
                                </h3>
                                <p>For the summer season</p>
                                <img src={e1} alt="" className="img-fluid" />
                            </div>
                            <div id='event2' className=" text-center text-md-start mt-3">
                                <h3>GET 30% Off</h3>
                                <p>USE PROMO CODE</p>
                                <Link to={"/Men's clothing"}><button id='ev2btn' className='btn btn-dark mt-3'>DINEWEEKENDSALE</button></Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row g-4">
                                <div id='event3' className="col-6 p-3 text-center text-md-start">
                                    <h3>Flex Sweatshirt</h3>
                                    <span className="d-block">$100.00</span>
                                    <span className="d-block">$75.00</span>
                                    <img src={e2} alt="" className="img-fluid" />
                                </div>
                                <div id='event4' className="col-6 p-3 text-center text-md-start">
                                    <p>Flex Push Button Bomber</p>
                                    <div>
                                        <span className="d-block">$225.00</span>
                                        <span className="d-block">$190.00</span>
                                    </div>
                                    <img src={e3} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 id='bh' className='text-primary text-center'>PRODUCTS</h3>
                <h1 className='text-center'>Check What We Have</h1>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 col-md-4 p-3">
                        <img id='imgg' src={e11} alt="" className="img-fluid" />
                        <h4 className='text-start ps-3'>
                            <div>Brushed Raglenn Sweatshirt</div>
                            <span>$195</span>
                        </h4>
                    </div>
                    <div className="col-12 col-md-4 p-3">
                        <img id='imgg' src={e22} alt="" className="img-fluid" />
                        <h4 className='text-start ps-3'>
                            <div>Cameryn Sash Tie Dress</div>
                            <span>$545</span>
                        </h4>
                    </div>
                    <div className="col-12 col-md-4 p-3">
                        <img id='imgg' src={e33} alt="" className="img-fluid" />
                        <h4 className='text-start ps-3'>
                            <div>Flex Sweatshirt</div>
                            <span>$175</span>
                        </h4>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <h1 className='text-end pe-5 pt-5'>Unique and Authentic <br /> Vintage Designer Jewelery</h1>
                <div className="row gx-5 align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="row g-4">
                            <div className="col-12 col-md-6 p-3">
                                <h3>Using Good Quality Materials</h3>
                                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                            </div>
                            <div className="col-12 col-md-6 p-3">
                                <h3>100% Handmade Product</h3>
                                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                            </div>
                            <div className="col-12 col-md-6 p-3">
                                <h3>Modern Fashion Design</h3>
                                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                            </div>
                            <div className="col-12 col-md-6 p-3">
                                <h3>Discount for Bulk Orders</h3>
                                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row g-4">
                            <div className="col-12 col-md-6 p-3 text-center">
                                <img id='img3' src={feature} alt="" className="img-fluid" />
                            </div>
                            <div className="col-12 col-md-6">
                                <p className='p-4'>This is the latest design of our collection. This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                                <div className='text-center'>
                                    <Link to={"/AllProducts"}><button className='btn btn-dark mb-3'>See All Product</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-3 py-md-5 py-xl-10 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6 text-center">
                            <h2 className="display-5 mb-xxl-6"><b>Subscribe Our Newsletter</b></h2>
                            <div className="mb-md-5">Get the latest information and promo offers directly</div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
                            <form className="row gy-3 gy-lg-0 gx-lg-2 justify-content-center">
                                <div className="col-12 col-lg-8">
                                    <label htmlFor="email-newsletter-component" className="visually-hidden">Email Address</label>
                                    <input type="email" className="form-control bsb-form-control" id="email-newsletter-component" placeholder="Email Address" aria-label="email-newsletter-component" aria-describedby="email-newsletter-help" required />
                                </div>
                                <div className="col-12 col-lg-3 text-center text-lg-start">
                                    <button type="submit" className="btn btn-dark bsb-btn-3xl">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Homepage
