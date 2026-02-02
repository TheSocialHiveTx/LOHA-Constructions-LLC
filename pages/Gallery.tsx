
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Kitchen', 'Bathroom'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-20 bg-zinc-50">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold mb-4">Project Gallery</h1>
            <p className="text-zinc-600 max-w-xl mx-auto">Explore our portfolio of high-end home transformations in the Greater Houston area.</p>
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full font-bold transition-all ${filter === cat ? 'bg-primary text-white shadow-lg' : 'bg-white text-zinc-600 hover:bg-zinc-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-zinc-100">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-primary">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-zinc-500 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section Integration */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-8 italic text-zinc-400">"They didn't just build our house; they built our home."</h2>
          <p className="font-bold text-zinc-700">- Current Client in Cypress, TX</p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
