import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-blue-600 font-medium">New • Dropshipping LEMS</p>
            <h1 className="text-4xl font-extrabold mt-3 text-slate-900">KitaClick LEMS — Learn, Launch, Earn</h1>
            <p className="mt-6 text-lg text-slate-700">An all-in-one Learning & Earning Management System that trains Filipino sellers, connects them to verified catalogues, and automates dropshipping operations.</p>

            <div className="mt-8 flex gap-4">
              <Link to="/pricing" className="inline-block bg-blue-700 text-white px-5 py-3 rounded-md font-semibold shadow">Start Free Trial</Link>
              <Link to="/contact" className="inline-block border border-slate-200 px-5 py-3 rounded-md">Book a Demo</Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <div className="mb-4 text-slate-500 text-sm">Seller Dashboard Preview</div>
            <div className="border rounded-lg p-4 bg-slate-50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs text-slate-500">LEMS Progress</div>
                  <div className="text-lg font-semibold">Intermediate • Certified</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500">Active Catalogues</div>
                  <div className="font-bold">3</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="w-full bg-slate-200 h-2 rounded"><div className="h-2 bg-blue-700 rounded" style={{width: '65%'}}/></div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded">Orders Today<br/><span className="font-bold">24</span></div>
                  <div className="p-3 bg-white rounded">Conversion Rate<br/><span className="font-bold">3.6%</span></div>
                </div>
              </div>

              <div className="mt-4 text-center text-xs text-slate-500">Mockup — integrate real metrics from the production dashboard</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Services</h3>
        <p className="text-slate-600 mt-2">Education, automation, and commerce — built for Filipino entrepreneurs.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-white rounded-2xl shadow-sm border">
            <h4 className="font-semibold">Learning Module (LMS)</h4>
            <p className="mt-2 text-sm text-slate-600">Structured courses, quizzes, certificates, and progress tracking.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border">
            <h4 className="font-semibold">Earning Module (EMS)</h4>
            <p className="mt-2 text-sm text-slate-600">Access verified catalogues, automated listings, and fulfillment tracking.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border">
            <h4 className="font-semibold">Automation Suite</h4>
            <p className="mt-2 text-sm text-slate-600">One-click uploads, AI sales assistant, and analytics.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
