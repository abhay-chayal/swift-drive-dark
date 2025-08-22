import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Car, Truck, Clock } from 'lucide-react';

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
          
          {/* Coming Soon Animation */}
          <div className="relative mb-12">
            <div className="flex items-center justify-center space-x-4 animate-bounce">
              <Car className="w-16 h-16 text-primary animate-pulse" />
              <Truck className="w-20 h-20 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Car className="w-16 h-16 text-primary animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8 animate-scale-luxury">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Our <span className="text-premium">Fleet</span>
              </h1>
              <div className="flex items-center justify-center space-x-3 text-2xl text-muted-foreground">
                <Clock className="w-8 h-8 animate-spin" />
                <span className="animate-pulse">Coming Soon</span>
              </div>
            </div>

            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              We're preparing an exclusive fleet of premium vehicles to elevate your travel experience. 
              From luxury sedans to premium SUVs, our curated collection will redefine mobility.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="glass p-8 rounded-2xl text-center space-y-4 animate-float-up">
                <Car className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Luxury Sedans</h3>
                <p className="text-muted-foreground">Premium comfort for executive travel</p>
              </div>
              <div className="glass p-8 rounded-2xl text-center space-y-4 animate-float-up" style={{ animationDelay: '0.2s' }}>
                <Truck className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Premium SUVs</h3>
                <p className="text-muted-foreground">Spacious luxury for group travel</p>
              </div>
              <div className="glass p-8 rounded-2xl text-center space-y-4 animate-float-up" style={{ animationDelay: '0.4s' }}>
                <Car className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Electric Fleet</h3>
                <p className="text-muted-foreground">Sustainable luxury for the future</p>
              </div>
            </div>

            <div className="pt-8">
              <Button 
                className="btn-premium text-lg px-10 py-6"
                onClick={() => navigate('/auth')}
              >
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;