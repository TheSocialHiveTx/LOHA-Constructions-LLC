
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Kitchen' | 'Bathroom' | 'Other';
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
