
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const NavItems = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Benefits", href: "/#benefits" },
  { label: "For Partners", href: "/partners" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact Us", href: "/#contact" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="text-2xl font-display font-bold flex items-center"
          >
            <span className="text-splyt-600">Splyt</span>
            <span className="text-frost-500">pay</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {NavItems.map((item) => (
            item.href.startsWith('/#') ? (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-midnight-800 hover:text-splyt-600 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="px-4 py-2 text-sm font-medium text-midnight-800 hover:text-splyt-600 transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
          <Button 
            className="ml-2 bg-gradient hover:opacity-90"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-midnight-800"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 animate-fade-down">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {NavItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-base font-medium text-midnight-800 hover:text-splyt-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-4 py-3 text-base font-medium text-midnight-800 hover:text-splyt-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <Button 
              className="mt-2 bg-gradient hover:opacity-90"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
