import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import plus from '../assets/plus.png';
import minus from '../assets/minus.png';

const Product = (props) => {
    let [counter, setCounter] = useState(1);
    let [size, setSize] = useState("S");
    let { id } = useParams();

    const [product, setProduct] = useState([]);

    const [showDangerAlert, setShowDangerAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json));
    }, [id]);

    let handleMin = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    let handleMax = () => {
        setCounter(counter + 1);
    };

    let sizeS = () => {
        setSize("S");
    };

    let sizeM = () => {
        setSize("M");
    };

    let sizeL = () => {
        setSize("L");
    };

    let sizeXL = () => {
        setSize("XL");
    };

    const handleAddToCart = (item) => {
        const isLoggedIn = !!localStorage.getItem('token');

        if (!isLoggedIn) {
            setShowDangerAlert(true);
            return;
        }

        props.setCart(currentCart => {
            const existingItemIndex = currentCart.findIndex(
                cartItem => cartItem.productid === item.id && cartItem.size === size
            );

            setShowSuccessAlert(true);

            if (existingItemIndex !== -1) {
                return currentCart.map((cartItem, index) => {
                    if (index === existingItemIndex) {
                        return {
                            ...cartItem,
                            quantity: cartItem.quantity + counter
                        };
                    }
                    return cartItem;
                });
            }

            return [
                ...currentCart,
                {
                    productid: item.id,
                    title: item.title,
                    quantity: counter,
                    url: item.url,
                    size: size,
                    price: item.price
                }
            ];
        });
    };

    if (!product) return <h2>Product not found</h2>;

    return (
        <>
            <Navbar />
            <div className='container p-3'>
                <div className='row'>
                    <div className='col-12 col-md-6 d-flex justify-content-center'>
                        <img id='imgp' src={product.image} alt={product.title} className='img-fluid' />
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='mt-4 mt-md-0'>
                            <h3 className='mb-4'>{product.title}</h3>
                            <div className="btn-group mb-4" role="group" aria-label="Basic radio toggle button group">
                                <input onClick={sizeS} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                                <label className="btn btn-outline-dark" htmlFor="btnradio1">S</label>
                                <input onClick={sizeM} type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                <label className="btn btn-outline-dark" htmlFor="btnradio2">M</label>
                                <input onClick={sizeL} type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                                <label className="btn btn-outline-dark" htmlFor="btnradio3">L</label>
                                <input onClick={sizeXL} type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" />
                                <label className="btn btn-outline-dark" htmlFor="btnradio4">XL</label>
                            </div>
                            <div className='pb-4'>
                                <h3 className='mb-3'>Quantity: </h3>
                                <button className='btn btn-sm' onClick={handleMin}><img src={minus} alt="minus" /></button>
                                <span className='px-2'>{counter}</span>
                                <button className='btn btn-sm' onClick={handleMax}><img src={plus} alt="plus" /></button>
                            </div>

                            <div>
                                {showDangerAlert && (
                                    <div className="alert alert-danger" role="alert">
                                        Please login first!
                                    </div>
                                )}

                                {showSuccessAlert && (
                                    <div className="alert alert-success" role="alert">
                                        Item added to cart!
                                    </div>
                                )}
                                <button type='button' className='btn btn-dark' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                <h5 className='mt-4'>Price: ${product.price}</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row pt-5'>
                    <div className='col-12'>
                        <h2>Product Information</h2>
                        <hr />
                    </div>
                    <div className='col-12 col-md-6'>
                        <h3>Product Details</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h3>Product Care</h3>
                        <ul>
                            <li>Hand wash using cold water.</li>
                            <li>Do not use bleach.</li>
                            <li>Hang it to dry.</li>
                            <li>Iron on low temperature.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Product;
