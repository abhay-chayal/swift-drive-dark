import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowLeft, Car, Clock, Star, Zap, Camera } from 'lucide-react';
import { useState } from 'react';

// Using existing Swift images as placeholders for the user's uploaded images
import whiteSwiftFront from '@/assets/1.jpg';
import whiteSwiftSide from '@/assets/2.jpg';
import whiteSwiftInterior from '@/assets/5.jpg';
import whiteSwift1 from '@/assets/white-swift-1.jpg';
import swiftHero from '@/assets/swift-2025-hero.jpg';

const Fleet = () => {
  const navigate = useNavigate();
  
  const carImages = [
    {
      src: whiteSwiftFront,
      alt: "2025 Suzuki Swift - Front View",
      label: "Front View"
    },
    {
      src: whiteSwiftSide,
      alt: "2025 Suzuki Swift - Side Profile",
      label: "Side Profile"
    },
    {
      src: whiteSwift1,
      alt: "2025 Suzuki Swift - Side Angle",
      label: "Side Angle"
    },
    {
      src: swiftHero,
      alt: "2025 Suzuki Swift - Rear View",
      label: "Rear View"
    },
    {
      src: whiteSwiftInterior,
      alt: "2025 Suzuki Swift - Interior",
      label: "Interior"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

          {/* Premium Swift Showcase */}
          <div className="mb-16 max-w-4xl mx-auto">
            <Card className="glass border-0 shadow-elevation overflow-hidden">
              {/* Main Carousel */}
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {carImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative overflow-hidden h-96 lg:h-[500px]">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 glass px-4 py-2 rounded-full">
                            <span className="text-sm font-medium text-primary">Available Now</span>
                          </div>
                          <div className="absolute bottom-4 right-4 glass px-4 py-2 rounded-full">
                            <span className="text-sm font-medium flex items-center">
                              <Camera className="w-4 h-4 mr-2" />
                              {image.label}
                            </span>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 glass border-0 hover:bg-primary/20" />
                  <CarouselNext className="right-4 glass border-0 hover:bg-primary/20" />
                </Carousel>
                
                {/* Image Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-2">
                    {carImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-primary w-8' 
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Car Details */}
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-2">2025 Suzuki Swift</h3>
                    <p className="text-lg text-muted-foreground mb-4">Premium White Edition - License Plate: RJ60CE9319</p>
                    <div className="inline-flex items-center glass px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-primary mr-2">●</span>
                      <span className="text-sm font-medium">Automatic Transmission • Fuel Efficient • Premium Interior</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                    <div className="text-center">
                      <span className="text-4xl font-bold text-premium">₹120</span>
                      <span className="text-lg text-muted-foreground">/hour</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <span className="text-lg font-medium ml-2">4.9 (127 reviews)</span>
                    </div>
                  </div>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                    <div className="glass p-4 rounded-lg text-center">
                      <div className="text-lg font-bold text-primary">5</div>
                      <div className="text-sm text-muted-foreground">Seats</div>
                    </div>
                    <div className="glass p-4 rounded-lg text-center">
                      <div className="text-lg font-bold text-primary">23</div>
                      <div className="text-sm text-muted-foreground">km/L</div>
                    </div>
                    <div className="glass p-4 rounded-lg text-center">
                      <div className="text-lg font-bold text-primary">Auto</div>
                      <div className="text-sm text-muted-foreground">Transmission</div>
                    </div>
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
