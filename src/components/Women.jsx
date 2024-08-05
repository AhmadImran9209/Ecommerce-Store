import { useState, useEffect } from 'react'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Women = (props) => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${props.category}`)
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(err => console.error('Error fetching products:', err));
  }, [props.category]);
  console.log(props.category)
  

  return (
    <>
    
      <Navbar />
      <div className="container p-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {
              products.map((item, index) => (
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
              ))
          }

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Women