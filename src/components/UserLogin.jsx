import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(json => {
                if (json.token) {
                    localStorage.setItem('token', json.token); // Save token in localStorage
                    setIsLoggedIn(true);
                    alert('Login successful')
                } else {
                    alert('Invalid username or password')
                }
            })
            .catch(error => {
                console.error('Error:', error)
                alert('An error occurred during login')
            })
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Navbar />
            <div className='container-fluid text-center pt-5'>
                <h2>User Login</h2>
            </div>
            {!isLoggedIn ? (
                <form className='container-fluid align-items-center w-25 p-4 mb-5' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button
                        type="submit"
                        className={`btn btn-dark ${isLoggedIn ? 'btn-success' : 'btn-primary'}`}>
                        {isLoggedIn ? 'Logged In' : 'Submit'}
                    </button>
                </form>
            ) : (
                <div className="container-fluid text-center p-4">
                    <p>Welcome back!</p>
                    <button
                        type="button"
                        className="btn btn-danger mb-5"
                        onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default UserLogin
