import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Services from './Pages/Services'
import About from './Pages/About'
function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
