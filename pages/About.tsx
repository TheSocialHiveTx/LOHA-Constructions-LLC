
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Building Houston's <br /><span className="text-secondary italic">Finest Interiors</span></h1>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              Loha Construction LLC was founded on the principles of precision, artistry, and uncompromising quality. Based in the heart of Houston, we've spent over a decade perfecting the craft of high-end residential remodeling.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 hidden lg:block">
          <img src="https://picsum.photos/seed/build/800/1200" className="h-full w-full object-cover" alt="Construction" />
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img src="https://picsum.photos/seed/about2/800/600" className="rounded-2xl shadow-2xl" alt="Design" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif font-bold mb-8">Our Vision & Mission</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-primary font-bold text-xl mb-3 flex items-center">
                    <span className="w-8 h-1 bg-primary mr-3"></span> The Vision
                  </h4>
                  <p className="text-zinc-600 leading-relaxed">To be the most trusted name in Texas home transformations, known for delivering unparalleled luxury and functional design that stands the test of time.</p>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-xl mb-3 flex items-center">
                    <span className="w-8 h-1 bg-primary mr-3"></span> The Mission
                  </h4>
                  <p className="text-zinc-600 leading-relaxed">We strive to provide an stress-free remodeling experience through transparent communication, expert craftsmanship, and a relentless focus on our clients' satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: "fa-gem", title: "Quality Above All", text: "We never cut corners. Every cut, nail, and finish must meet our master standard." },
              { icon: "fa-handshake", title: "Integrity", text: "Honest pricing, realistic timelines, and respectful treatment of your home." },
              { icon: "fa-lightbulb", title: "Innovation", text: "Using the latest technology and design trends to solve unique space challenges." }
            ].map((v, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-2xl shadow-sm border border-zinc-100 hover:-translate-y-2 transition-transform">
                <i className={`fas ${v.icon} text-4xl text-primary mb-6`}></i>
                <h4 className="text-xl font-bold mb-4">{v.title}</h4>
                <p className="text-zinc-500">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 bg-zinc-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold mb-8">Ready to Meet the Team?</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">Let's sit down and discuss how we can turn your current house into your ultimate dream home.</p>
          <Link to="/contact-us" className="bg-primary text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-red-800 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
