
import { Service, Project, Testimonial, FAQItem } from './types';

export const COMPANY_INFO = {
  name: "Loha Construction LLC",
  phone: "(713) 385-7231",
  email: "lohaco@outlook.com",
  address: "Houston, TX",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443089.050630777!2d-95.73060049448255!3d29.816049280140226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1715456381294!5m2!1sen!2sus",
  cities: ["Houston", "Sugar Land", "Katy", "The Woodlands", "Pearland", "Cypress", "Kingwood", "Pasadena"]
};

export const SERVICES: Service[] = [
  {
    id: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into a culinary masterpiece with our custom design and renovation services.",
    longDescription: "At Loha Construction LLC, we understand that the kitchen is the heart of your home. Whether you're looking for a sleek modern upgrade or a cozy traditional feel, our expert craftsmen handle everything from custom cabinetry and quartz countertops to lighting and flooring.",
    image: "https://picsum.photos/seed/kitchen1/1200/800",
    features: ["Custom Cabinetry", "Countertop Installation", "Open Concept Design", "Backsplash Tiling", "Plumbing & Electrical Updates"]
  },
  {
    id: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    description: "Create a spa-like retreat in your own home with our professional bathroom renovation solutions.",
    longDescription: "From master suites to guest powder rooms, we specialize in high-end bathroom transformations. We focus on maximizing space, improving functionality, and using premium materials like natural stone, glass enclosures, and modern fixtures to create your private oasis.",
    image: "https://picsum.photos/seed/bath1/1200/800",
    features: ["Walk-in Showers", "Free-standing Tubs", "Custom Vanities", "Waterproof Flooring", "Smart Fixture Integration"]
  }
];

export const PROJECTS: Project[] = [
  { id: "1", title: "Modern Farmhouse Kitchen", category: "Kitchen", description: "A bright, airy transformation in Sugar Land.", image: "https://picsum.photos/seed/pro1/800/600" },
  { id: "2", title: "Luxury Master Suite", category: "Bathroom", description: "Spa-inspired bathroom in The Woodlands.", image: "https://picsum.photos/seed/pro2/800/600" },
  { id: "3", title: "Contemporary Chef's Kitchen", category: "Kitchen", description: "Industrial chic remodel in Downtown Houston.", image: "https://picsum.photos/seed/pro3/800/600" },
  { id: "4", title: "Minimalist Bath Retreat", category: "Bathroom", description: "Clean lines and marble finishes in Katy.", image: "https://picsum.photos/seed/pro4/800/600" }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: "1", name: "David M.", location: "Houston", content: "Loha Construction transformed our outdated 80s kitchen into a modern dream. Their attention to detail is unmatched!", rating: 5 },
  { id: "2", name: "Sarah L.", location: "Katy", content: "Professional, punctual, and highly skilled. They renovated our master bath and it feels like a 5-star hotel.", rating: 5 },
  { id: "3", name: "James W.", location: "Sugar Land", content: "Great communication throughout the whole project. The results exceeded my expectations.", rating: 5 }
];

export const FAQS: FAQItem[] = [
  { question: "How long does a typical kitchen remodel take?", answer: "Most kitchen remodels take between 4 to 8 weeks, depending on the scope of work and material availability." },
  { question: "Do you offer free estimates?", answer: "Yes! We provide complimentary on-site consultations and detailed project estimates for all potential clients in the Houston area." },
  { question: "Are you licensed and insured?", answer: "Absolutely. Loha Construction LLC is fully licensed and carries comprehensive insurance to protect both our workers and your property." },
  { question: "Can you help with the design process?", answer: "Yes, we offer design consultation services to help you choose materials, layouts, and finishes that match your vision and budget." }
];
