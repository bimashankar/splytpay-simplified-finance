
import React from "react";
import { 
  BadgePercent, 
  Clock, 
  CreditCard, 
  CalendarRange, 
  PiggyBank, 
  BadgeCheck 
} from "lucide-react";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { AnimatedGradientText } from "@/components/ui/AnimatedGradientText";

const benefits = [
  {
    title: "Competitive Rate",
    description: "Just 10.5% p.a. interest rate, much lower than personal loans or credit cards",
    icon: <BadgePercent className="w-8 h-8" />,
  },
  {
    title: "No Minimum Credit Score",
    description: "Any or no credit score qualifies for a loan",
    icon: <CreditCard className="w-8 h-8" />,
  },
  {
    title: "Quick Approval",
    description: "Simple approval process with no income proof required",
    icon: <BadgeCheck className="w-8 h-8" />,
  },
  {
    title: "Flexible Repayment",
    description: "Choose from 3 months to 3 years to repay according to your budget",
    icon: <CalendarRange className="w-8 h-8" />,
  },
  {
    title: "Tax Efficient",
    description: "Save capital gains tax and preserve future earnings on your investments",
    icon: <PiggyBank className="w-8 h-8" />,
  },
  {
    title: "Fast Disbursement",
    description: "Get your loan disbursed within just 3 hours",
    icon: <Clock className="w-8 h-8" />,
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 pattern-dots text-splyt-100 opacity-70 w-64 h-64"></div>
        <div className="absolute left-0 bottom-1/4 pattern-dots text-frost-100 opacity-70 w-64 h-64"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-splyt-50 text-splyt-700 text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <AnimatedGradientText
            element="h2"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Why Choose Splytpay?
          </AnimatedGradientText>
          <p className="text-lg text-midnight-700">
            We offer a smarter way to finance your purchases while keeping your investments intact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <GlassmorphicCard
              key={index}
              interactive
              className="h-full"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 text-splyt-500 flex items-center justify-center w-16 h-16 rounded-full bg-splyt-50">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground flex-grow">{benefit.description}</p>
              </div>
            </GlassmorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
