"use client";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/footer";
import Services from "@/components/Services";
import Benefits from "@/components/benefits";
import MainFeatures from "@/components/mainFeatures";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <MainFeatures />
        <Services />
        <Benefits />
        <Testimonial />
      </main>

      <Footer />
    </div>
  );
}
