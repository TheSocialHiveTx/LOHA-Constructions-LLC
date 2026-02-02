
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { 
      name: 'Services', 
      path: '#', 
      isDropdown: true,
      subLinks: [
        { name: 'Kitchen Remodeling', path: '/services/kitchen-remodeling' },
        { name: 'Bathroom Remodeling', path: '/services/bathroom-remodeling' },
      ]
    },
    { name: 'Projects', path: '/project-gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact-us' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = () => location.pathname.startsWith('/services/');

  return (
    <>
      {/* Subtle overlay for better text visibility on transparent state */}
      {!scrolled && (
        <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent z-[45] pointer-events-none transition-opacity duration-300"></div>
      )}
      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex flex-col">
              <span className={`text-2xl font-bold tracking-tighter transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>LOHA</span>
              <span className={`text-[10px] tracking-[0.2em] font-bold transition-colors ${scrolled ? 'text-zinc-600' : 'text-zinc-200'}`}>CONSTRUCTION LLC</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-7 items-center">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button 
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onMouseEnter={() => setServicesOpen(true)}
                    className={`flex items-center font-semibold hover:text-primary transition-colors focus:outline-none ${isServiceActive() ? 'text-primary' : scrolled ? 'text-zinc-800' : 'text-white'}`}
                  >
                    {link.name}
                    <i className={`fas fa-chevron-down ml-1.5 text-[10px] transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div 
                    onMouseLeave={() => setServicesOpen(false)}
                    className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-3 border border-zinc-100 transition-all duration-200 transform origin-top ${servicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                  >
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setServicesOpen(false)}
                        className={`block px-6 py-2.5 text-sm font-semibold hover:bg-zinc-50 hover:text-primary transition-colors ${isActive(sub.path) ? 'text-primary bg-zinc-50' : 'text-zinc-700'}`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`font-semibold hover:text-primary transition-colors ${isActive(link.path) ? 'text-primary' : scrolled ? 'text-zinc-800' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link to="/contact-us" className="bg-primary hover:bg-accent text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-md">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden text-2xl p-2 focus:outline-none ${scrolled ? 'text-zinc-800' : 'text-white'}`}>
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out border-b border-zinc-100 ${isOpen ? 'max-h-[600px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.isDropdown ? (
                  <div className="flex flex-col space-y-3">
                    <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest px-1">Services</span>
                    {link.subLinks?.map((sub) => (
                      <Link 
                        key={sub.path} 
                        to={sub.path} 
                        onClick={() => {setIsOpen(false); setServicesOpen(false);}}
                        className={`font-bold pl-4 text-lg border-l-2 ${isActive(sub.path) ? 'text-primary border-primary' : 'text-zinc-800 border-transparent'}`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className={`font-bold text-xl ${isActive(link.path) ? 'text-primary' : 'text-zinc-800'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <Link 
              to="/contact-us" 
              onClick={() => setIsOpen(false)} 
              className="bg-primary text-white p-4 text-center rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 pt-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <div className="mb-4">
              <span className="text-3xl font-bold text-white tracking-tighter">LOHA</span>
              <p className="text-xs text-secondary font-bold tracking-widest mt-1 uppercase">CONSTRUCTION LLC</p>
            </div>
            <p className="text-zinc-400 mb-6 italic">Building dreams, one home at a time in Houston, TX.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-zinc-800 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-zinc-800 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 bg-zinc-800 flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Houzz"><i className="fab fa-houzz"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/kitchen-remodeling" className="hover:text-secondary transition-colors">Kitchen Remodeling</Link></li>
              <li><Link to="/services/bathroom-remodeling" className="hover:text-secondary transition-colors">Bathroom Remodeling</Link></li>
              <li><Link to="/project-gallery" className="hover:text-secondary transition-colors">Project Gallery</Link></li>
              <li><Link to="/contact-us" className="hover:text-secondary transition-colors">Custom Projects</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about-us" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-secondary transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link to="/areas-served/houston" className="hover:text-secondary transition-colors">Areas Served</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 text-primary mr-3"></i>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 text-primary mr-3"></i>
                <a href={`mailto:${COMPANY_INFO.email}`} className="break-all hover:text-white transition-colors">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 text-primary mr-3"></i>
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full-width Map Section in Footer */}
      <div className="w-full h-[300px] mt-12 overflow-hidden grayscale contrast-[1.2] hover:grayscale-0 transition-all duration-700 opacity-50 hover:opacity-100">
        <iframe 
          src={COMPANY_INFO.googleMapsEmbed} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Loha Construction LLC Service Area"
        ></iframe>
      </div>
      
      <div className="bg-zinc-950 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Loha Construction LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
