
import React from "react";
import { FileSearch, Clock3, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepCard } from "@/components/ui/StepCard";
import { AnimatedGradientText } from "@/components/ui/AnimatedGradientText";

const steps = [
  {
    number: 1,
    title: "Check Eligibility",
    description: "Fetch your portfolio & check eligibility for a loan in seconds",
    icon: <FileSearch className="w-8 h-8" />,
  },
  {
    number: 2,
    title: "Choose Options",
    description: "Select your loan amount & customize repayment options that fit your budget",
    icon: <Clock3 className="w-8 h-8" />,
  },
  {
    number: 3,
    title: "Instant Loan Disbursal",
    description: "Pledge your funds & receive the money in your account within hours",
    icon: <CreditCard className="w-8 h-8" />,
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-splyt-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-white rounded-full opacity-70"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-white rounded-full opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-splyt-50 text-splyt-700 text-sm font-medium mb-4">
            Simple Process
          </div>
          <AnimatedGradientText
            element="h2"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            How It Works
          </AnimatedGradientText>
          <p className="text-lg text-midnight-700">
            Get started in minutes with our simple three-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient z-0"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative z-10 animate-fade-up" 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <StepCard 
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            </div>
          ))}
        </div>
        {/*
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient hover:opacity-90"
          >
            Start Your Application Today
          </Button>
        </div>
        */}
      </div>
    </section>
  );
};

export default HowItWorksSection;
