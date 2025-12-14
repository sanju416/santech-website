export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">
            SanTech Solutions
          </h1>
          <nav className="space-x-6 text-gray-600">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Data & Analytics. Architecture. Engineering.
        </h2>
        <p className="text-lg">
          Helping businesses build scalable, intelligent data platforms
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-16 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8">Our Services</h3>
        <ul className="grid md:grid-cols-3 gap-6">
          <li className="bg-white p-6 shadow rounded">Data & Analytics</li>
          <li className="bg-white p-6 shadow rounded">Cloud Architecture</li>
          <li className="bg-white p-6 shadow rounded">ETL & Data Engineering</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-16">
        <div className="max-w-xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-center">Contact Us</h3>
          <form name="contact" method="POST" data-netlify="true" className="space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            <input name="name" placeholder="Your Name" className="w-full p-3 border rounded" />
            <input name="email" type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
            <textarea name="message" placeholder="Message" className="w-full p-3 border rounded"></textarea>
            <button className="w-full bg-blue-700 text-white py-3 rounded">
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}
