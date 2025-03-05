import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Services from './Pages/Services'
import About from './Pages/About'
import SellerRegistration from './Pages/SellerRegistration'
function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path='/seller/register' element={<SellerRegistration />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
