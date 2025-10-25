import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Features from './pages/Features'
import Solutions from './pages/Solutions'
import Courses from './pages/Courses'
import Sellers from './pages/Sellers'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Careers from './pages/Careers'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/solutions" element={<Solutions/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/sellers" element={<Sellers/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
