import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Car, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-premium rounded-xl flex items-center justify-center">
              <Car className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-premium">GlydeOn</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300">
              Home
            </a>
            <button 
              onClick={() => navigate('/fleet')} 
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Fleet
            </button>
            <a href="#services" className="text-foreground hover:text-primary transition-colors duration-300">
              Services
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button 
              className="btn-premium"
              onClick={() => navigate('/auth')}
            >
              Get Started
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
              <button 
                onClick={() => navigate('/fleet')} 
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Fleet
              </button>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button 
                  className="btn-premium w-full"
                  onClick={() => navigate('/auth')}
                >
                  Get Started
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