import { useState, useEffect } from 'react'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Men = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((item, index) => (
            <div className="col" key={index}>
              <div className="">
                <Link to={"/Product/" + item.id}>
                  <img src={item.image} className="card-img-top" alt={item.title} style={{ maxHeight: '300px', objectFit: 'cover' }} />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Price: ${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Men