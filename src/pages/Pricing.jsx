export default function Pricing(){
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold">Pricing</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <div className="text-sm text-slate-500">Starter</div>
          <div className="text-3xl font-bold mt-2">₱999 <span className="text-sm font-medium">/mo</span></div>
        </div>
        <div className="p-6 border rounded-lg bg-blue-50">
          <div className="text-sm text-blue-700">Pro</div>
          <div className="text-3xl font-bold mt-2">₱2,499 <span className="text-sm font-medium">/mo</span></div>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="text-sm text-slate-500">All-Access</div>
          <div className="text-3xl font-bold mt-2">₱3,999 <span className="text-sm font-medium">/mo</span></div>
        </div>
      </div>
    </div>
  )
}
