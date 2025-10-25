import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-slate-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-lg font-semibold">KitaClick</div>
          <div className="text-sm text-slate-300 mt-2">LEMS — Learning & Earning Management System for Dropshipping</div>
        </div>

        <div className="text-sm text-slate-300">
          <div className="font-semibold">Quick Links</div>
          <div className="mt-2">
            <a className="hover:underline" href="/kita-click/">Home</a> · <a className="hover:underline" href="/kita-click/about">About</a> · <a className="hover:underline" href="/kita-click/services">Services</a>
          </div>
        </div>

        <div className="text-sm text-slate-300">
          <div className="font-semibold">Contact</div>
          <div className="mt-2">info@kitaclick.com<br/>+63 912 345 6789</div>
          <div className="mt-4 text-xs text-slate-400">facebook.com/kitaclick · instagram.com/kitaclick · youtube.com/@kitaclick</div>
        </div>
      </div>

      <div className="text-center text-xs text-slate-400 py-4">© 2025 KitaClick. All rights reserved.</div>
    </footer>
  )
}
