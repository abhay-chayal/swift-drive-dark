import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Clock, CreditCard, ArrowRight, Smartphone, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import { showPremiumToast } from '@/components/ui/premium-toast';
import CallNowDialog from '@/components/CallNowDialog';
const BookingSection = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    duration: '',
    phone: ''
  });
  const navigate = useNavigate();
  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({
      data: {
        session
      }
    }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const {
      data: {
        subscription
      }
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleBooking = async () => {
    console.log('Booking button clicked, user:', user);
    if (!user) {
      console.log('No user found, redirecting to auth');
      return;
    }

    // Validate form data
    if (!formData.pickupLocation || !formData.dropoffLocation || !formData.pickupDate || !formData.pickupTime || !formData.duration || !formData.phone) {
      console.log('Form validation failed:', formData);
      showPremiumToast("Please fill in all booking details", "error");
      return;
    }

    console.log('Starting booking process with form data:', formData);
    setIsLoading(true);
    
    try {
      console.log('Calling supabase function...');
      const { data, error } = await supabase.functions.invoke('send-booking-email', {
        body: {
          userEmail: user.email,
          userName: user.user_metadata?.full_name || user.email,
          pickupLocation: formData.pickupLocation,
          dropoffLocation: formData.dropoffLocation,
          pickupDate: formData.pickupDate,
          pickupTime: formData.pickupTime,
          duration: formData.duration,
          phone: formData.phone
        }
      });
      
      console.log('Supabase function response:', { data, error });
      
      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Failed to send booking request');
      }
      
      showPremiumToast("Booking Enquiry Sent! We've received your booking request. Our team will contact you shortly.", "success");

      // Reset form
      setFormData({
        pickupLocation: '',
        dropoffLocation: '',
        pickupDate: '',
        pickupTime: '',
        duration: '',
        phone: ''
      });
    } catch (error: any) {
      console.error('Booking error:', error);
      showPremiumToast(`Booking Failed: ${error.message || 'There was an error sending your booking request. Please try again.'}`, "error");
    } finally {
      setIsLoading(false);
    }
  };
  return <section id="booking" className="py-20 bg-gradient-hero relative overflow-hidden">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Book Now Button Card */}
          <Card className="glass border-0 shadow-elevation">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-6">Ready to Book Your Swift?</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Click below to fill out our simple booking form and we'll get back to you within 24 hours.
              </p>
              
              <Button 
                type="button"
                className="btn-premium text-lg px-12 py-6 group mb-6"
                onClick={() => navigate('/booking')}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Book Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center justify-center gap-4 mt-4">
                <p className="text-xs text-muted-foreground">
                  Or call us directly:
                </p>
                <CallNowDialog />
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Quick response • No hidden charges • Easy cancellation
              </p>
            </CardContent>
          </Card>

          {/* Booking Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Why Book with GlydeOn?</h3>
              
              <div className="space-y-4">
                {[{
                icon: Smartphone,
                title: "UPI Integration",
                description: "Pay instantly with any UPI app - GPay, PhonePe, Paytm, and more"
              }, {
                icon: Clock,
                title: "Instant Confirmation",
                description: "Get booking confirmation within seconds of payment"
              }, {
                icon: MapPin,
                title: "Doorstep Delivery",
                description: "We deliver the car to your preferred location"
              }].map((feature, index) => <div key={feature.title} className="flex space-x-4 group">
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
                  </div>)}
              </div>
            </div>

            {/* Pricing Card */}
            <Card className="glass border-0 shadow-elevation">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4">2025 Swift Pricing</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Hourly Rate</span>
                    <span className="font-semibold text-primary">₹120/hour</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Daily Rate (24 hrs)</span>
                    <span className="font-semibold text-primary">₹2,100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Weekly Discount</span>
                    <span className="font-semibold text-green-500">-15%</span>
                  </div>
                  <hr className="border-border/20" />
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Best Value</span>
                    <span className="text-premium">₹14,160/week</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default BookingSection;