
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PartnersBanner from "@/components/sections/PartnersBanner";
import UseCasesSection from "@/components/sections/UseCasesSection";
import Calculator from "@/components/sections/Calculator";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Handle hash in URL for direct navigation to sections
    if (location.hash) {
      // Small timeout to ensure all elements are properly loaded
      setTimeout(() => {
        const sectionId = location.hash.replace('#', '');
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    // Add scroll-based animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        // If element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('animate-fade-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <PartnersBanner />
        <UseCasesSection />
        <Calculator />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
