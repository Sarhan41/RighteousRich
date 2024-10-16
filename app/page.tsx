// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Righteous & Rich - Business Scaling</title>
        <meta name="description" content="Scale your business in 90 days with personalized support." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Righteous & Rich</div>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded">Schedule a Call</button>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-12">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
          We Will Personally Scale & Fix Your Business in Just 90 Days!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Get hands-on, personalized support from a team that scaled multiple online businesses to 7 figures.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <div className="bg-white shadow-lg p-6 rounded">
            <ul className="text-left text-lg">
              <li>✅ Lead Generation & Nurturing</li>
              <li>✅ Offer Optimisation</li>
              <li>✅ Sales & CRM Optimisation</li>
              <li>✅ Data Analytics</li>
            </ul>
          </div>

          {/* Video Embed */}
          <div className="w-full max-w-lg mx-auto">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/videoid"
              title="Video Offer"
              className="shadow-lg rounded"
            ></iframe>
          </div>
        </div>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 text-lg font-semibold rounded-lg">
          Schedule a Call
        </button>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Services Include</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          <div className="bg-gray-100 p-6 rounded shadow-lg">Lead Generation & Nurturing</div>
          <div className="bg-gray-100 p-6 rounded shadow-lg">Offer Optimisation</div>
          <div className="bg-gray-100 p-6 rounded shadow-lg">Sales & CRM Optimisation</div>
          <div className="bg-gray-100 p-6 rounded shadow-lg">Data Analytics</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6">
        <p>&copy; 2024 Righteous & Rich. All rights reserved.</p>
      </footer>
    </div>
  );
}
