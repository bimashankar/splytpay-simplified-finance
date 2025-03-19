
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Plug, BadgePercent, Smile, CreditCard } from "lucide-react";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { AnimatedGradientText } from "@/components/ui/AnimatedGradientText";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PartnerCalculator from "@/components/sections/PartnerCalculator";
import { useToast } from "@/components/ui/use-toast";

const benefitsData = [
  {
    title: "Easy Integration",
    description: "Seamlessly integrate Splytpay into your billing system.",
    icon: <Plug className="w-8 h-8" />,
  },
  {
    title: "No-Cost EMI",
    description: "Enable your customers to pay in EMIs at lowest interest rates.",
    icon: <CreditCard className="w-8 h-8" />,
  },
  {
    title: "Increased Customer Satisfaction",
    description: "Attract and retain more customers with flexible payment options.",
    icon: <Smile className="w-8 h-8" />,
  },
  {
    title: "Improved Collections",
    description: "A faster, more affordable way to collect payments from customers sooner.",
    icon: <BadgePercent className="w-8 h-8" />,
  },
];

const Partners: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Thank you for your interest!",
      description: "We will contact you shortly with more information.",
    });
    setEmail("");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-purple-50/50 to-white">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse-subtle"></div>
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-frost-200 rounded-full filter blur-3xl opacity-20 animate-pulse-subtle"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-6 animate-fade-down">
              For Business Partners
            </div>
            
            <AnimatedGradientText
              element="h1"
              className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 animate-fade-down animation-delay-100"
            >
              Empower Your Customers with Splytpay
            </AnimatedGradientText>
            
            <p className="text-lg md:text-xl text-midnight-700 mb-8 max-w-2xl mx-auto animate-fade-down animation-delay-200">
              Save up to 50% when offering no-cost EMI plans compared to traditional options
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-4">
              Business Benefits
            </div>
            <AnimatedGradientText
              element="h2"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Why Partner with Splytpay?
            </AnimatedGradientText>
            <p className="text-lg text-midnight-700">
              Join our network of partners and provide your customers with the most affordable payment options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitsData.map((benefit, index) => (
              <GlassmorphicCard
                key={index}
                interactive
                className="h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-purple-500 flex items-center justify-center w-16 h-16 rounded-full bg-purple-50">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <PartnerCalculator />

      {/* Sign Up Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full pattern-dots text-purple-100 opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedGradientText
              element="h2"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Join Our Growing Network of Partners
            </AnimatedGradientText>
            
            <p className="text-lg text-midnight-700 mb-8">
              Get in touch to learn how Splytpay can help your business offer better payment options to your customers.
            </p>
            
            <GlassmorphicCard className="max-w-xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Your Business Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient hover:opacity-90"
                >
                  <Check className="mr-2 h-4 w-4" />
                  Sign Me Up
                </Button>
                
                <p className="text-sm text-muted-foreground pt-2">
                  We'll contact you soon with more information about how to get started.
                </p>
              </form>
            </GlassmorphicCard>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Partners;
