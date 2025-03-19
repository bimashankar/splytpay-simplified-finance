
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight-950 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="#" className="text-2xl font-display font-bold flex items-center mb-4">
              <span className="text-splyt-400">Splyt</span>
              <span className="text-frost-400">pay</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-xs">
              Affordable EMIs through revolutionary savings backed lending options.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-white transition-colors">For Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              {/*<li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lending Partner</a></li>*/}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400" />
                <a href="mailto:contact@splytpay.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@splytpay.in
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400" />
                <a href="tel:+9100000000" className="text-gray-400 hover:text-white transition-colors">
                  +91 9739916725
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Splytpay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
