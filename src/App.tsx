import './App.css'
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Footer,
} from './components'

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contactus" element={<ContactPage />} />
      </Routes>
      <Footer />
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
