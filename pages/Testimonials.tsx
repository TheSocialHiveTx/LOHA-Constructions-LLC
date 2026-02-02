
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="pt-20 bg-zinc-50">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold mb-4">What Our Clients Say</h1>
            <p className="text-zinc-600">Real feedback from homeowners across the Greater Houston area.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 relative">
                <div className="text-secondary mb-4">
                  {[...Array(t.rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                </div>
                <p className="text-zinc-600 mb-8 italic leading-relaxed">"{t.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-zinc-200 rounded-full mr-4 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${t.id}/100`} alt={t.name} />
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-sm text-zinc-400">{t.location}, TX</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonial Placeholder */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden p-12 text-white relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6 italic">"A stress-free experience from start to finish."</h2>
                <p className="text-zinc-400 mb-8 text-lg">We were worried about the mess and the timeline, but Loha Construction kept the job site clean and finished ahead of schedule. The quality is just incredible.</p>
                <p className="font-bold">- The Henderson Family, The Woodlands</p>
              </div>
              <div className="relative group cursor-pointer aspect-video bg-zinc-800 rounded-2xl overflow-hidden flex items-center justify-center border border-zinc-700">
                <img src="https://picsum.photos/seed/video/800/450" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Video cover" />
                <div className="w-20 h-20 bg-primary/80 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform relative z-10">
                  <i className="fas fa-play ml-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
