
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PROJECTS, TESTIMONIALS, COMPANY_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/remodel/1920/1080" 
            className="w-full h-full object-cover filter brightness-[0.4]"
            alt="Houston Remodeling"
          />
        </div>
        <div className="relative z-10 text-center container mx-auto px-6">
          <h4 className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in">Excellence in Craftsmanship</h4>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Transforming Your <br />
            <span className="text-primary italic">Dream Home</span> Into Reality
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-zinc-200 max-w-2xl mx-auto">
            Houston's premier luxury remodeling experts specializing in bespoke kitchens and spa-inspired bathrooms.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact-us" className="bg-primary hover:bg-red-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto">
              Schedule Free Estimate
            </Link>
            <Link to="/project-gallery" className="border-2 border-white hover:bg-white hover:text-zinc-900 text-white px-10 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto">
              View Our Work
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-3xl opacity-50"></i>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Specialty Services</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-zinc-600 max-w-xl mx-auto">From concept to completion, we deliver high-end results tailored to your lifestyle and taste.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative overflow-hidden rounded-2xl shadow-lg bg-white">
                <div className="h-80 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-600 mb-6">{service.description}</p>
                  <Link to={`/services/${service.id}`} className="text-primary font-bold inline-flex items-center hover:translate-x-2 transition-transform">
                    Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Why Houston Homeowners <br /><span className="text-primary">Trust Loha Construction</span></h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                With years of experience in the Houston metropolitan area, we pride ourselves on transparency, integrity, and exceptional quality. We don't just build rooms; we build lasting relationships with our clients through meticulous planning and execution.
              </p>
              <div className="space-y-6">
                {[
                  { icon: 'fa-gem', title: 'Premium Materials', desc: 'We source only high-quality stone, wood, and fixtures.' },
                  { icon: 'fa-user-shield', title: 'Certified Experts', desc: 'Fully licensed and insured professionals you can trust in your home.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4 group hover:bg-primary transition-colors">
                      <i className={`fas ${item.icon} text-primary group-hover:text-white`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/team/800/1000" className="rounded-2xl shadow-2xl" alt="Loha Team" />
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">15+</p>
                <p className="uppercase tracking-widest text-xs font-bold opacity-80">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel (Simple Grid) */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4">Our Recent Transformations</h2>
              <p className="text-zinc-400">Discover some of our award-winning work across Texas.</p>
            </div>
            <Link to="/project-gallery" className="mt-6 md:mt-0 inline-block border-b-2 border-secondary pb-1 font-bold text-secondary hover:text-white hover:border-white transition-colors">
              View All Projects
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative h-80 overflow-hidden rounded-xl cursor-pointer">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-secondary font-bold text-xs uppercase mb-1">{project.category}</span>
                  <h4 className="text-xl font-bold">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            Book your free consultation today and let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/contact-us" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all">
              Request Your Estimate
            </Link>
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center justify-center border-2 border-white/50 hover:border-white px-10 py-4 rounded-full font-bold text-lg transition-all">
              <i className="fas fa-phone mr-2"></i> {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
