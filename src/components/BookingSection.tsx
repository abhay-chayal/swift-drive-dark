import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Clock, CreditCard, ArrowRight, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookingSection = () => {
  const navigate = useNavigate();

  return (
    <section id="booking" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.05)_0%,_transparent_70%)]" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-floating" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Quick & Easy</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Book Your{' '}
            <span className="text-premium">Swift</span>
            {' '}in Minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience seamless booking with instant confirmation and UPI payment integration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <Card className="glass border-0 shadow-elevation">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Reserve Your Swift</h3>
              
              <div className="space-y-6">
                {/* Location Selection */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup" className="flex items-center text-sm font-medium">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      Pickup Location
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-muted/50 border-border/20">
                        <SelectValue placeholder="Select pickup city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dropoff" className="flex items-center text-sm font-medium">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      Drop-off Location
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-muted/50 border-border/20">
                        <SelectValue placeholder="Select drop-off city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Date and Time Selection */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup-date" className="flex items-center text-sm font-medium">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      Pickup Date
                    </Label>
                    <Input
                      type="date"
                      id="pickup-date"
                      className="bg-muted/50 border-border/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pickup-time" className="flex items-center text-sm font-medium">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      Pickup Time
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-muted/50 border-border/20">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="15:00">03:00 PM</SelectItem>
                        <SelectItem value="18:00">06:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <Label htmlFor="duration" className="flex items-center text-sm font-medium">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    Rental Duration
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-muted/50 border-border/20">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Day - ₹1,200</SelectItem>
                      <SelectItem value="3">3 Days - ₹3,400</SelectItem>
                      <SelectItem value="7">1 Week - ₹7,500</SelectItem>
                      <SelectItem value="30">1 Month - ₹25,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="+91 98765 43210"
                      className="bg-muted/50 border-border/20"
                    />
                  </div>
                </div>

                {/* Book Button */}
                <Button 
                  type="button"
                  className="btn-premium w-full text-lg py-6 group"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/auth');
                  }}
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Book with UPI
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Instant confirmation • No hidden charges • Cancel anytime
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Booking Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Why Book with GlydeOn?</h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: Smartphone,
                    title: "UPI Integration",
                    description: "Pay instantly with any UPI app - GPay, PhonePe, Paytm, and more"
                  },
                  {
                    icon: Clock,
                    title: "Instant Confirmation",
                    description: "Get booking confirmation within seconds of payment"
                  },
                  {
                    icon: MapPin,
                    title: "Doorstep Delivery",
                    description: "We deliver the car to your preferred location"
                  }
                ].map((feature, index) => (
                  <div key={feature.title} className="flex space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-premium rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <Card className="glass border-0 shadow-elevation">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4">2025 Swift Pricing</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Daily Rate</span>
                    <span className="font-semibold text-primary">₹1,200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weekly Discount</span>
                    <span className="font-semibold text-green-500">-15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monthly Discount</span>
                    <span className="font-semibold text-green-500">-30%</span>
                  </div>
                  <hr className="border-border/20" />
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Best Value</span>
                    <span className="text-premium">₹25,000/month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;