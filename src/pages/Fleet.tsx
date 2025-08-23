import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Car, Truck, Clock, Star, Zap } from 'lucide-react';
import whiteSwiftFront from '@/assets/white-swift-front.jpg';
import whiteSwiftSide from '@/assets/white-swift-side.jpg';
import whiteSwiftInterior from '@/assets/white-swift-interior.jpg';

const Fleet = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.1)_0%,_transparent_70%)]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-floating" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-floating" style={{ animationDelay: '1s' }} />

      {/* Back Button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-6 left-6 text-foreground/70 hover:text-foreground z-10"
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Button>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center max-w-4xl mx-auto">
          
          {/* Fleet Header */}
          <div className="text-center mb-12 animate-scale-luxury">
            <div className="inline-flex items-center glass px-6 py-3 rounded-full mb-6">
              <Star className="w-4 h-4 text-accent mr-2" />
              <span className="text-sm font-medium">Premium Fleet Available</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Our <span className="text-premium">Fleet</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Experience the luxury of our pristine white 2025 Suzuki Swift collection. 
              Each vehicle is meticulously maintained for your premium journey.
            </p>
          </div>

          {/* Fleet Gallery */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="glass border-0 shadow-elevation overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={whiteSwiftFront} 
                  alt="2025 White Suzuki Swift - Front View"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 glass px-3 py-2 rounded-full">
                  <span className="text-sm font-medium text-primary">Available</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">2025 Swift - Premium White</h3>
                <p className="text-muted-foreground mb-4">Front angle showcase of our pristine white Swift</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-premium">₹120/hour</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-0 shadow-elevation overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={whiteSwiftSide} 
                  alt="2025 White Suzuki Swift - Side Profile"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 glass px-3 py-2 rounded-full">
                  <span className="text-sm font-medium text-primary">Available</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">2025 Swift - Side Profile</h3>
                <p className="text-muted-foreground mb-4">Sleek side profile of our elegant Swift</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-premium">₹120/hour</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-0 shadow-elevation overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={whiteSwiftInterior} 
                  alt="2025 White Suzuki Swift - Interior"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 glass px-3 py-2 rounded-full">
                  <span className="text-sm font-medium text-primary">Available</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Luxury Interior</h3>
                <p className="text-muted-foreground mb-4">Premium interior with modern amenities</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-premium">₹120/hour</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fleet Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass p-8 rounded-2xl text-center space-y-4 animate-float-up">
              <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Instant Booking</h3>
              <p className="text-muted-foreground">Book any Swift from our fleet instantly with just one click</p>
            </div>
            <div className="glass p-8 rounded-2xl text-center space-y-4 animate-float-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center mx-auto">
                <Car className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Premium Maintenance</h3>
              <p className="text-muted-foreground">Every vehicle is professionally cleaned and serviced</p>
            </div>
            <div className="glass p-8 rounded-2xl text-center space-y-4 animate-float-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Availability</h3>
              <p className="text-muted-foreground">Access our fleet anytime with round-the-clock service</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="btn-premium text-lg px-12 py-6 group"
              onClick={() => navigate('/')}
            >
              Book Your Swift Now
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;