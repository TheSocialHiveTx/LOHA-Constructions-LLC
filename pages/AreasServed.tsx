
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const AreasServed: React.FC = () => {
  const { city } = useParams<{ city?: string }>();
  const currentCity = city ? (city.charAt(0).toUpperCase() + city.slice(1).replace('-', ' ')) : 'Houston';

  return (
    <div className="pt-20">
      <section className="bg-zinc-900 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">Remodeling Services in {currentCity}, TX</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Providing high-end construction and remodeling excellence to homeowners in {currentCity} and the surrounding Greater Houston area.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Local Remodeling Experts in {currentCity}</h2>
              <p className="text-lg text-zinc-600 mb-8">
                If you live in {currentCity}, you know that quality matters. Loha Construction LLC brings elite craftsmanship to your neighborhood. We understand local building codes and the unique architectural styles found across our community.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  `Professional Kitchen Design in ${currentCity}`,
                  `Spa-Style Bathroom Renovations for ${currentCity} Homeowners`,
                  "Full-Service Construction Management",
                  "Expert Material Selection & Procurement"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-zinc-700 font-semibold">
                    <i className="fas fa-map-marker-alt text-primary mr-3"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact-us" className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-red-800 transition-colors inline-block shadow-lg">
                Book a {currentCity} Consultation
              </Link>
            </div>
            <div>
              <div className="bg-zinc-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-serif font-bold mb-6">Our Full Service Area</h3>
                <p className="text-zinc-500 mb-8 italic">We serve all major suburbs in the Greater Houston Metropolitan Area:</p>
                <div className="grid grid-cols-2 gap-4">
                  {COMPANY_INFO.cities.map(c => (
                    <Link 
                      key={c} 
                      to={`/areas-served/${c.toLowerCase().replace(' ', '-')}`}
                      className="text-zinc-800 hover:text-primary font-bold bg-white p-3 rounded-lg shadow-sm text-center border border-zinc-200 transition-all hover:shadow-md"
                    >
                      {c}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreasServed;
