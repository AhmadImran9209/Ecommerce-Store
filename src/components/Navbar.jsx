import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'
import cartbag from '../assets/icon-cart.png'
import logo from '../assets/Logo.webp'
import usericon from '../assets/icon-user.png'
import searchicon from '../assets/icon-search.png'

const Navbar = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategory(json))
    }, [])

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <nav className="navbar px-5 navbar-expand-lg">
            <div className="container-fluid m-3 mx-5">
                <Link to={"/"} className="navbar-brand" href="#"><img src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                        {category.map((cat) => {
                            return (
                                <div key={cat}>
                                    <li className="nav-item">
                                        <NavLink to={"/" + cat} className="nav-link active mx-2" aria-current="page">
                                            {capitalizeFirstLetter(cat)}
                                        </NavLink>
                                    </li>
                                </div>
                            );
                        })}
                        <li className="nav-item">
                            <NavLink to="/Allproducts" className="nav-link active px-2" aria-current="page" href="#">All Products</NavLink>
                        </li>
                    </ul>
                    <form className="px-4" role="search">
                        <input id='search' className="form-control me-3" type="search" placeholder="🔍What are you looking for?" aria-label="Search" />
                    </form>
                    <Link to="/Cart"><button className='btn btn-outline-light'><img id='cartimg' src={cartbag} alt="" /></button></Link>
                    <NavLink to={"/UserLogin"}><button className='btn'><img src={usericon} alt="" /></button></NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar