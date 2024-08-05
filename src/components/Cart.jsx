import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import cartbag from '../assets/cartbag.png'

const Cart = (props) => {

    useEffect(()=>{
        fetch('https://fakestoreapi.com/carts/user/2')
            .then(res=>res.json())
            .then(json=>console.log(json))
    })

        const handleRemoveFromCart = (itemToRemove) => {
            props.setCart(currentCart => 
                currentCart.filter(item => 
                    item.productid !== itemToRemove.productid || item.size !== itemToRemove.size
                )
            );
        };

    if (props.cart.length == 0)
        return (
            <>
                <Navbar />
                <div className='text-center'>
                    <img src={cartbag} alt="" id='cartbagimg' />
                    <h2 className='container py-5'>Your cart is empty</h2>
                </div>
                <Footer />
            </>
        )

    return (
        <>
            <Navbar />

            <h2 className='container pt-5'>Shopping Cart</h2>
            <section className="h-100">
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            {props.cart.map((item, index) => (
                                <div className="card rounded-3 mb-4" key={item.id}>
                                    <div className="card-body p-4">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <img
                                                    src={item.image}
                                                    className="img-fluid rounded-3"
                                                    alt={item.title}
                                                />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <p className="lead fw-normal mb-2">{item.title}</p>
                                                <p>
                                                    <span className="text-muted">Size: {item.size}</span>
                                                </p>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button
                                                    className="btn px-2"
                                                    onClick={() => {
                                                        if (item.quantity > 1)
                                                            var qu = props.cart[index].quantity - 1
                                                        var tempcart = props.cart
                                                        tempcart[index].quantity = qu;
                                                        props.setCart([...tempcart])
                                                    }}
                                                ><h1>-</h1>
                                                </button>

                                                <input
                                                    min="0"
                                                    name="quantity"
                                                    value={item.quantity}
                                                    className="form-control form-control-md"
                                                />

                                                <button
                                                    className="btn px-2"
                                                    onClick={() => {
                                                        var qu = props.cart[index].quantity + 1
                                                        var tempcart = props.cart
                                                        tempcart[index].quantity = qu;
                                                        props.setCart([...tempcart])
                                                    }}
                                                ><h2>+</h2>
                                                </button>
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h5 className="mb-0">{item.price}</h5>
                                            </div>
                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <button
                                                    className="btn text-danger"
                                                    onClick={() => handleRemoveFromCart(item)}
                                                ><h4>🗑</h4>
                                                    <i className="fas fa-trash fa-lg"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="card mb-4">
                                <div className="card-body p-4 d-flex flex-row">
                                    <div className="form-outline flex-fill">
                                        <input
                                            type="text"
                                            id="form1"
                                            className="form-control form-control-lg"
                                        />
                                        <label className="form-label" htmlFor="form1">
                                            Discount code
                                        </label>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-outline-warning btn-lg ms-3"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <button
                                        type="button"
                                        className="btn btn-warning btn-block btn-lg"
                                    >
                                        Proceed to Pay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Cart;
