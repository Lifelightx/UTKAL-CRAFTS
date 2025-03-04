import React, { useContext } from 'react';
import { StoreContext } from './Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import About from './Pages/AboutPage';
import CartPage from './Pages/Cart';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import CheckoutPage from './Pages/CheckoutPage';
import Products from './Pages/Products';

function App() {
  const {user} = useContext(StoreContext)
  console.log(user)
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/details' element={<ProductDetailsPage/>} />
        <Route path='/checkout' element={<CheckoutPage/>} />
        <Route path='/products' element={<Products/>} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
