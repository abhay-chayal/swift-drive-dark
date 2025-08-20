import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Car, Phone, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-premium rounded-xl flex items-center justify-center">
              <Car className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-premium">SwiftRent</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300">
              Home
            </a>
            <a href="#fleet" className="text-foreground hover:text-primary transition-colors duration-300">
              Fleet
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors duration-300">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button className="btn-premium">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 glass rounded-2xl">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#fleet" className="text-foreground hover:text-primary transition-colors">
                Fleet
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button className="btn-premium w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;