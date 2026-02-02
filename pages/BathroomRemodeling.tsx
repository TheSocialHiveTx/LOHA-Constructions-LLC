
import React from 'react';
import { SERVICES, PROJECTS } from '../constants';
import { Link } from 'react-router-dom';

const BathroomRemodeling: React.FC = () => {
  const service = SERVICES.find(s => s.id === 'bathroom-remodeling')!;
  const relatedProjects = PROJECTS.filter(p => p.category === 'Bathroom');

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
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/b1/400/500" className="rounded-xl shadow-lg" alt="Bath 1" />
              <img src="https://picsum.photos/seed/b2/400/500" className="rounded-xl shadow-lg mt-8" alt="Bath 2" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif font-bold mb-6">Experience Ultimate Relaxation</h2>
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
                Start Your Bathroom Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-16">High-End Bathroom Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: 'fa-shower', title: 'Luxury Wet Rooms', desc: 'Seamless floor transitions with custom glass partitions.' },
              { icon: 'fa-tint', title: 'Smart Fixtures', desc: 'Temperature-controlled showers and high-tech toilets.' },
              { icon: 'fa-gem', title: 'Custom Stonework', desc: 'Hand-picked marble and quartz for vanities and flooring.' }
            ].map((f, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 border border-primary/50">
                  <i className={`fas ${f.icon} text-3xl text-secondary`}></i>
                </div>
                <h4 className="text-xl font-bold mb-4">{f.title}</h4>
                <p className="text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Snippet */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Recent Bathroom Renovations</h2>
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

export default BathroomRemodeling;
