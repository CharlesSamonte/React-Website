import './App.css'
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
} from './components'

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </>
    // <>
    //   <Hero />
    //   <About />
    //   <CustomerReview />
    //   <OurServices />
    //   <Shop />
    //   <Contact />
    //   <Footer />
    // </>
  )
}

export default App
