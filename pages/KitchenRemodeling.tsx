
import React from 'react';
import { SERVICES, PROJECTS } from '../constants';
import { Link } from 'react-router-dom';

const KitchenRemodeling: React.FC = () => {
  const service = SERVICES.find(s => s.id === 'kitchen-remodeling')!;
  const relatedProjects = PROJECTS.filter(p => p.category === 'Kitchen');

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative h-[60vh] flex items-center text-white">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover brightness-[0.4]" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{service.title}</h1>
          <p className="text-xl max-w-2xl opacity-90">{service.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Design Your Dream Kitchen</h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-zinc-50 p-4 rounded-lg">
                    <i className="fas fa-check-circle text-primary"></i>
                    <span className="font-semibold text-zinc-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact-us" className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-red-800 transition-colors inline-block">
                Get a Kitchen Remodel Quote
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/k1/400/500" className="rounded-xl shadow-lg mt-8" alt="Kitchen 1" />
              <img src="https://picsum.photos/seed/k2/400/500" className="rounded-xl shadow-lg" alt="Kitchen 2" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Seamless Process</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", text: "We discuss your vision, budget, and functional needs." },
              { step: "02", title: "Design & Plan", text: "We create detailed 3D designs and source materials." },
              { step: "03", title: "Construction", text: "Our craftsmen execute the build with daily supervision." },
              { step: "04", title: "Final Walkthrough", text: "We ensure every detail meets our elite standards." }
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary">
                <span className="text-4xl font-bold text-zinc-200 mb-4 block">{p.step}</span>
                <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                <p className="text-zinc-500">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Snippet */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Featured Kitchen Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedProjects.map(p => (
              <div key={p.id} className="relative group overflow-hidden rounded-2xl h-96">
                <img src={p.image} className="w-full h-full object-cover" alt={p.title} />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8 text-center">
                  <div>
                    <h4 className="text-white text-2xl font-bold mb-2">{p.title}</h4>
                    <p className="text-zinc-200 mb-4">{p.description}</p>
                    <Link to="/project-gallery" className="text-secondary font-bold hover:underline">View Gallery</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitchenRemodeling;
