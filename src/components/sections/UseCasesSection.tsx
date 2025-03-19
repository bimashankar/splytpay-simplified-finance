
import React from "react";
import { 
  Stethoscope, 
  GraduationCap, 
  Shield, 
  Car 
} from "lucide-react";
import { UseCaseCard } from "@/components/ui/UseCaseCard";
import { AnimatedGradientText } from "@/components/ui/AnimatedGradientText";

const useCases = [
  {
    title: "Hospital Bills",
    icon: <Stethoscope className="w-8 h-8" />,
  },
  {
    title: "School Fees",
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    title: "Insurance Premiums",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: "Down Payment (Car/Home)",
    icon: <Car className="w-8 h-8" />,
  },
];

export const UseCasesSection: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-1/2 h-1/2 bg-frost-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-splyt-100 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-splyt-50 text-splyt-700 text-sm font-medium mb-4">
            Perfect For
          </div>
          <AnimatedGradientText
            element="h2"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Perfect for Your Essential Payments
          </AnimatedGradientText>
          <p className="text-lg text-midnight-700">
            Flexibility to pay in easy EMIs while you focus on what matters most
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="animate-fade-up" 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <UseCaseCard 
                title={useCase.title}
                icon={useCase.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
