export default function Contact(){
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p className="mt-3 text-slate-600">Fill the form below to get in touch. (This is a placeholder — not connected.)</p>
      <form className="mt-6 grid gap-4">
        <input className="border p-3 rounded" placeholder="Full name" />
        <input className="border p-3 rounded" placeholder="Email address" />
        <input className="border p-3 rounded" placeholder="Subject" />
        <textarea className="border p-3 rounded" rows="6" placeholder="Message" />
        <button className="bg-blue-700 text-white px-4 py-2 rounded w-40">Send Message</button>
      </form>
    </div>
  )
}
