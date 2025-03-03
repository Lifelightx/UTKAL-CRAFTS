import React, { useContext } from 'react';
import { StoreContext } from './Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import About from './Pages/About';
import CartPage from './Pages/Cart';
import ProductDetailsPage from './Pages/ProductDetailsPage';
function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/details' element={<ProductDetailsPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
