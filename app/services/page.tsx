import { Metadata } from 'next';
import { ServicesClient } from './services-client';

export const metadata: Metadata = {
  title: 'Professional Web Services',
  description: 'Explore our comprehensive range of web development, design, and digital marketing services. Custom solutions for your business needs.',
  openGraph: {
    title: 'Professional Web Services | LandFree',
    description: 'Explore our comprehensive range of web development, design, and digital marketing services.',
    images: [
      {
        url: 'https://landfree.com/services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'LandFree Services'
      }
    ]
  }
};

export default function ServicesPage() {
  return <ServicesClient />;
}