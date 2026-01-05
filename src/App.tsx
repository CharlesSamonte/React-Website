import './App.css'
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  CustomerReview,
  OurServices,
  Contact,
  Footer,
  Shop
} from './components'

import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
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
