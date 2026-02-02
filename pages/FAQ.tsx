
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="pt-20 bg-zinc-50">
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-zinc-600">Common questions about our remodeling process and company.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-zinc-50 transition-colors"
                >
                  <span className="font-bold text-lg text-zinc-800">{faq.question}</span>
                  <i className={`fas fa-chevron-${activeIndex === idx ? 'up' : 'down'} text-primary`}></i>
                </button>
                {activeIndex === idx && (
                  <div className="p-6 border-t border-zinc-50 bg-white">
                    <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary p-10 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="mb-8 text-red-100">Our project managers are happy to provide detailed answers for your specific project.</p>
            <a href="tel:(713) 385-7231" className="inline-block bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-zinc-100 transition-colors">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
