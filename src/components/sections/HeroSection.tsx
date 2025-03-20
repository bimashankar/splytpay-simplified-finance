
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/AnimatedGradientText";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-splyt-50/50 to-transparent"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-frost-200 rounded-full filter blur-3xl opacity-20 animate-pulse-subtle"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-splyt-200 rounded-full filter blur-3xl opacity-20 animate-pulse-subtle animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/*
          <div className="inline-block px-3 py-1 rounded-full bg-splyt-50 text-splyt-700 text-sm font-medium mb-6 animate-fade-down">
            Simplified Finance
          </div>
          */}
          <AnimatedGradientText
            element="h1"
            className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 animate-fade-down animation-delay-100"
          >
            Buy Now, Pay Later – <br />
            Powered by Your Mutual Funds
          </AnimatedGradientText>
          
          <p className="text-lg md:text-xl text-midnight-700 mb-8 max-w-2xl mx-auto animate-fade-down animation-delay-200">
            Convert your big expenses into easy EMIs at just 10.5% p.a. No minimum credit score with instant approval.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-down animation-delay-300">
            {/*
            <Button 
              size="lg"
              className="bg-gradient hover:opacity-90 px-8"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Calculate your limit
            </Button>
            */}
            <Button
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => {
                const howItWorksSection = document.getElementById('how-it-works');
                if (howItWorksSection) {
                  howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
