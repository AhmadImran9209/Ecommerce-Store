import { useState, useEffect } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import Men from './components/Men'
import Women from './components/Women'
import Product from './components/Product'
import Cart from './components/Cart'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Allproducts from './components/Allproducts'
import UserLogin from './components/UserLogin'


function App() {
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategory(json))
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          {/* <Route path="/Men's clothing" element={<Men />}></Route>
          <Route path="/Women's clothing" element={<Women />}></Route> */}
          {
            category.map((cat) => {
              return(
                  <Route path={cat} element={<Women category={cat} setCategory={setCategory} />} ></Route>
              )              
            })            
          }
          <Route path="/Product/:id" element={<Product cart={cart} setCart={setCart} />}></Route>
          <Route path="/Allproducts" element={<Allproducts />}></Route>
          <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />}></Route>
          <Route path='/UserLogin' element={<UserLogin />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
