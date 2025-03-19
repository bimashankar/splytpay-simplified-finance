
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";
import { AnimatedGradientText } from "@/components/ui/AnimatedGradientText";

const partners = [
  {
    name: "KFintech",
    logo: "/lovable-uploads/df5a3281-c32f-4efa-b7ec-99d678b2ae3d.png"
  },
  {
    name: "CAMS",
    logo: "/lovable-uploads/68daf267-7d76-4b75-8a43-d33938ff8d0c.png"
  },
  {
    name: "NSDL",
    logo: "/lovable-uploads/7b87f729-3a8d-4f3e-aa0f-da213c41b906.png"
  },
  {
    name: "Digio",
    logo: "/lovable-uploads/a5cd29c8-713e-4a22-9958-e544b435912e.png"
  },
  {
    name: "Bajaj Finserv",
    logo: "/lovable-uploads/005fbe05-ac41-4f57-9062-bb9e60ff9701.png"
  }
];

export const PartnersBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-splyt-50 text-splyt-700 text-sm font-medium mb-4">
            Industry Leaders
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-midnight-800">The</h2>
            <AnimatedGradientText
              element="h2"
              className="text-2xl md:text-3xl font-bold"
              animated={false}
            >
              GOOD
            </AnimatedGradientText>
            <h2 className="text-2xl md:text-3xl font-bold text-midnight-800">Partnership</h2>
          </div>
        </div>

        <div className="mt-8">
          {/* Desktop Partners Display */}
          <div className="hidden md:flex items-center justify-center space-x-8 lg:space-x-12">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="h-14 md:h-16 lg:h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Mobile Partners Carousel */}
          <div className="md:hidden">
            <Carousel>
              <CarouselContent>
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="flex flex-col items-center p-2">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersBanner;
