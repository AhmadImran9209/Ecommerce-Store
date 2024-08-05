import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../assets/icons8-x.svg'
import icon2 from '../assets/icons8-facebook.svg'
import icon3 from '../assets/icons8-linkedin.svg'

const Footer = () => {
    return (
        <div className='text-bg-light p-3'>
            <div className="container text-center mb-5">
                <div className="row">
                    <div className="col text-start">
                        <h1>AI Clothing</h1>
                        <p className=''>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                        <div className='icon-con'>
                            <button type="button" class="icon btn btn-secondary btn-sm mx-1">
                                <img src={icon1} alt="" class="icon-img" />
                            </button>
                            <button type="button" class="icon btn btn-secondary btn-sm mx-1">
                                <img src={icon2} alt="" class="icon-img" />
                            </button>
                            <button type="button" class="icon btn btn-secondary btn-sm mx-1">
                                <img src={icon3} alt="" class="icon-img" />
                            </button>
                        </div>

                    </div>
                    <div className="col text-start ms-5">
                        <h2>Company</h2>
                        <Link className='link-dark text-decoration-none row' ><p className='text-start'>About</p></Link>
                        <Link className='link-dark text-decoration-none row' ><p className='text-start'>Terms of use</p></Link>
                        <Link className='link-dark text-decoration-none row' ><p className='text-start'>Privacy Policy</p></Link>
                        <Link className='link-dark text-decoration-none row' ><p className='text-start'>How it Works</p></Link>
                        <Link className='link-dark text-decoration-none row' ><p className='text-start'>Contact Us</p></Link>
                    </div>
                    <div className="col text-start">
                        <h2>Support</h2>
                        <Link className='link-dark text-decoration-none row' ><p className='text-start'>Support Carrer</p></Link>
                        <Link className='link-dark text-decoration-none row' ><p className='text-start'>24h Service</p></Link>
                        <Link className='link-dark text-decoration-none row' ><p className='text-start'>Quick Chat</p></Link>
                    </div>
                    <div className="col text-start">
                        <h2>Contact</h2>
                        <Link className='link-dark text-decoration-none row' ><p className='text-start'>Whatsapp</p></Link>
                        <Link className='link-dark text-decoration-none row' ><p className='text-start'>Support 24h</p></Link>
                    </div>
                </div>
            </div>

            <hr />

            <div className="row text-center">
                <div className="col-6 col-md-4">Copyright © 2022 Dine Market</div>
                <div className="col-6 col-md-4">Design by. Weird Design Studio</div>
                <div className="col-6 col-md-4">Code by. Ahmad</div>
            </div>
        </div>
    )
}

export default Footer