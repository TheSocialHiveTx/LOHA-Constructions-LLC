
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'Kitchen', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-20 bg-zinc-50">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold mb-4">Contact Our Experts</h1>
            <p className="text-zinc-600 max-w-xl mx-auto">Ready to remodel? Reach out today for a consultation to discuss your vision and get an expert project estimate.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-6">Our Contact Info</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <i className="fas fa-phone text-primary"></i>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-zinc-400">Phone</p>
                      <p className="text-lg font-semibold">{COMPANY_INFO.phone}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-zinc-400">Email</p>
                      <p className="text-lg font-semibold break-all">{COMPANY_INFO.email}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-zinc-400">Location</p>
                      <p className="text-lg font-semibold">{COMPANY_INFO.address}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h4 className="font-bold text-primary mb-4 uppercase tracking-widest text-sm text-center">Serving Greater Houston</h4>
                <p className="text-zinc-600 text-sm leading-relaxed text-center">
                  We specialize in high-end transformations across Houston, Katy, Sugar Land, The Woodlands, and surrounding metropolitan areas.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-2xl shadow-xl">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                      <i className="fas fa-check"></i>
                    </div>
                    <h2 className="text-3xl font-serif font-bold mb-4">Message Received!</h2>
                    <p className="text-zinc-600 mb-8">Thank you for reaching out to Loha Construction LLC. One of our project managers will contact you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="text-primary font-bold hover:underline">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-zinc-700 mb-2">Your Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-3 outline-none focus:border-primary transition-colors"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-zinc-700 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          required
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-3 outline-none focus:border-primary transition-colors"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-zinc-700 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-3 outline-none focus:border-primary transition-colors"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-zinc-700 mb-2">Project Interest</label>
                        <select 
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-3 outline-none focus:border-primary transition-colors"
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                        >
                          <option>Kitchen Remodel</option>
                          <option>Bathroom Remodel</option>
                          <option>Full Home Renovation</option>
                          <option>Other Construction</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-bold text-zinc-700">Project Details</label>
                      </div>
                      <textarea 
                        rows={4} 
                        required
                        placeholder="Tell us about your project... (e.g., 'Modernizing a 1990s kitchen with an island and walk-in pantry')"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-3 outline-none focus:border-primary transition-colors"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-red-800 transition-all shadow-lg flex items-center justify-center"
                    >
                      {loading ? (
                        <i className="fas fa-spinner fa-spin text-2xl"></i>
                      ) : (
                        <>Send Message <i className="fas fa-paper-plane ml-2"></i></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
