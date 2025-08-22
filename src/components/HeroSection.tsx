import { Button } from '@/components/ui/button';
import { Play, Star, ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import premiumSwiftToy from '@/assets/premium-swift-toy.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.1)_0%,_transparent_70%)]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-floating" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-floating" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-scale-luxury">
            {/* Badge */}
            <div className="inline-flex items-center glass px-6 py-3 rounded-full animate-luxury-float">
              <Star className="w-4 h-4 text-accent mr-2" />
              <span className="text-sm font-medium">CRED-Level Premium Experience</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Experience Premium{' '}
                <span className="text-premium">Mobility</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Where luxury meets convenience. Experience the future of car rentals 
                with GlydeOn's premium 2025 Swift fleet.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Instant Booking</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Full Insurance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                type="button"
                className="btn-premium text-lg px-10 py-5 group"
                onClick={(e) => {
                  console.log('Hero button clicked');
                  e.preventDefault();
                  e.stopPropagation();
                  navigate('/auth');
                }}
              >
                Login/Signup
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" className="btn-ghost text-lg px-10 py-5 group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/20">
              <div>
                <div className="text-2xl font-bold text-premium">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-premium">50+</div>
                <div className="text-sm text-muted-foreground">Cities</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-premium">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Premium Swift Toy Car */}
          <div className="relative animate-cred-slide">
            <div className="relative z-10">
              <img
                src={premiumSwiftToy}
                alt="Premium 2025 Suzuki Swift Toy Model - GlydeOn Rental"
                className="w-full h-auto animate-premium-drive hover-lift transition-all duration-700 rounded-3xl shadow-elevation animate-premium-glow"
              />
              
              {/* Floating Premium Elements */}
              <div className="absolute -top-8 -left-8 glass p-6 rounded-3xl animate-luxury-float backdrop-blur-md">
                <div className="text-3xl font-bold text-premium">₹1200</div>
                <div className="text-sm text-muted-foreground">Per Day</div>
                <div className="text-xs text-accent">Premium Rate</div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 glass p-6 rounded-3xl animate-luxury-float backdrop-blur-md" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-premium-glow" />
                  <div>
                    <div className="text-sm font-bold">Available Now</div>
                    <div className="text-xs text-muted-foreground">Premium Fleet</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Glow Effect */}
            <div className="absolute inset-0 bg-gradient-premium rounded-3xl blur-3xl opacity-30 -z-10 animate-premium-glow" />
            <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl opacity-20 -z-20 animate-luxury-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;