import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="KitaClick" className="w-10 h-10 rounded-md object-cover"/>
          <div>
            <div className="text-xl font-semibold text-blue-700">KitaClick</div>
            <div className="text-xs text-slate-500">LEMS • Learn • Launch • Earn</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-blue-700">Home</Link>
          <Link to="/about" className="hover:text-blue-700">About</Link>
          <Link to="/services" className="hover:text-blue-700">Services</Link>
          <Link to="/courses" className="hover:text-blue-700">Courses</Link>
          <Link to="/pricing" className="hover:text-blue-700">Pricing</Link>
          <Link to="/contact" className="text-white bg-blue-700 px-4 py-2 rounded-md">Contact</Link>
        </nav>

        <div className="md:hidden">
          <button aria-label="menu" className="p-2 rounded-md bg-slate-100">☰</button>
        </div>
      </div>
    </header>
  )
}
