import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Allproducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(err => console.error('Error fetching products:', err));
    }, []);

    function sorta() {
        fetch('https://fakestoreapi.com/products?sort=asce')
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    function sortd() {
        fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    return (
        <>
            <Navbar />
            <div className="container px-5 pb-5 col">
                <div className='p-3 text-end'><div class="dropdown">
                    <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort
                    </button>
                    <ul class="dropdown-menu">
                        <li><a onClick={sorta} class="dropdown-item" href="#">Asscending</a></li>
                        <li><a onClick={sortd} class="dropdown-item" href="#">Descending</a></li>
                    </ul>
                </div>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-5">
                    {products.map((item, index) => (
                        <div className="col" key={index}>
                            <div className="mx-4">
                                <Link to={"/Product/" + item.id}>
                                    <img src={item.image} className="card-img-top" alt={item.title} style={{ maxHeight: '300px', objectFit: 'cover' }} />
                                </Link>
                                <div className="card-body mt-3">
                                    <h5 className="card-title">{item.title}</h5>
                                    <h6 className="card-text mt-1">Price: ${item.price}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Allproducts;
